import i18next from "i18next";
import localeConfig from "./locales";

const { DEFAULT_LOCALE } = localeConfig;

const i18nextOptions = {
  fallbackLng: DEFAULT_LOCALE,
  keySeparator: false,
  nsSeparator: false,
  returnEmptyString: false,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
    prefix: "{",
    suffix: "}",
  },
};

export const translateFields = (t, items, fields) =>
  items.map((item) => ({
    ...item,
    ...Object.fromEntries(fields.map((field) => [field, t(item[field])])),
  }));

export const getPageI18n = (data = {}, pageContext = {}) => {
  const locale = pageContext.i18n?.language || DEFAULT_LOCALE;
  const resources = (data.locales?.edges || []).reduce((result, { node }) => {
    const messages =
      typeof node.data === "string" ? JSON.parse(node.data) : node.data;

    result[node.language] ||= {};
    result[node.language][node.ns || "translation"] = messages;
    return result;
  }, {});
  const instance = i18next.createInstance();

  instance.init({
    ...i18nextOptions,
    resources,
    lng: locale,
  });

  return {
    locale,
    t: instance.getFixedT(locale),
  };
};
