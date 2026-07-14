import React from "react";
import {
  APP_NAME,
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  SITE_NAME,
  SITE_URL,
} from "../constants/site";

const absoluteUrl = (path = "/") => `${SITE_URL}${path}`;

const baseApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  applicationCategory: "ShoppingApplication",
  applicationSubCategory: "Loyalty card wallet and barcode scanner",
  operatingSystem: "iOS, iPadOS, Android",
  description:
    "An offline QR and barcode scanner, loyalty card wallet, and organizer for iPhone, iPad, and Android.",
  url: SITE_URL,
  installUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free download with optional in-app purchases",
  },
  author: {
    "@type": "Organization",
    name: "Nomadix Apps LLC",
    url: "https://nomadixapps.org",
  },
};

const Seo = ({
  title,
  description,
  path = "/",
  image = "/social-card.png",
  article = false,
  faq = [],
  breadcrumbs = [],
  applicationSchema = false,
}) => {
  const canonical = absoluteUrl(path);
  const schemas = [];

  if (applicationSchema) schemas.push(baseApplicationSchema);

  if (faq.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  if (breadcrumbs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#f7f5f1" />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteUrl(image)} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ScanKeeper loyalty card wallet" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteUrl(image)} />
      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
};

export default Seo;
