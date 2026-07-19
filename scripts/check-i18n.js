const fs = require("fs");
const path = require("path");
const { LOCALES } = require("../src/i18n/locales");

const projectRoot = path.resolve(__dirname, "..");
const localeRoot = path.join(projectRoot, "src/i18n/locales");
const sourceRoot = path.join(projectRoot, "src");
const defaultLocale = "en-US";
const errors = [];

const readCatalog = (locale) => {
  const file = path.join(localeRoot, locale, "translation.json");

  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    errors.push(`${locale}: cannot read translation.json (${error.message})`);
    return {};
  }
};

const placeholders = (value) =>
  [...String(value).matchAll(/\{([^{}]+)\}/g)]
    .map((match) => match[1])
    .sort()
    .join(",");

const catalogs = Object.fromEntries(
  LOCALES.map(({ locale }) => [locale, readCatalog(locale)]),
);
const reference = catalogs[defaultLocale];
const referenceKeys = Object.keys(reference).sort();

for (const { locale } of LOCALES) {
  const catalog = catalogs[locale];
  const keys = Object.keys(catalog).sort();
  const missing = referenceKeys.filter((key) => !(key in catalog));
  const extra = keys.filter((key) => !(key in reference));
  const empty = keys.filter(
    (key) => typeof catalog[key] !== "string" || !catalog[key].trim(),
  );
  const placeholderMismatch = referenceKeys.filter(
    (key) =>
      key in catalog && placeholders(reference[key]) !== placeholders(catalog[key]),
  );
  const leakedMarkers = keys.filter((key) => /__SKP_\d+__/.test(catalog[key]));

  if (missing.length) errors.push(`${locale}: missing keys: ${missing.join(" | ")}`);
  if (extra.length) errors.push(`${locale}: extra keys: ${extra.join(" | ")}`);
  if (empty.length) errors.push(`${locale}: empty values: ${empty.join(" | ")}`);
  if (placeholderMismatch.length) {
    errors.push(
      `${locale}: placeholder mismatch: ${placeholderMismatch.join(" | ")}`,
    );
  }
  if (leakedMarkers.length) {
    errors.push(`${locale}: leaked translation markers: ${leakedMarkers.join(" | ")}`);
  }
}

const sourceFiles = [];
const collectSourceFiles = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) collectSourceFiles(file);
    if (entry.isFile() && /\.jsx?$/.test(entry.name)) sourceFiles.push(file);
  }
};

collectSourceFiles(sourceRoot);

const usedKeys = new Set();
const literalPattern = /\bt\(\s*"((?:\\.|[^"\\])*)"/g;

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(literalPattern)) {
    usedKeys.add(JSON.parse(`"${match[1]}"`));
  }
}

const missingUsedKeys = [...usedKeys].filter((key) => !(key in reference)).sort();
if (missingUsedKeys.length) {
  errors.push(`source uses unknown keys: ${missingUsedKeys.join(" | ")}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `i18n check passed: ${LOCALES.length} locales, ${referenceKeys.length} keys, ${usedKeys.size} literal t() calls`,
  );
}
