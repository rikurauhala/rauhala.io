const copyright = "© 2025 Riku Rauhala";
const version = `Version ${process.env.npm_package_version}`;
const sourceUrl = `https://github.com/rikurauhala/rauhala-io`;
const licenseUrl = `${sourceUrl}/blob/main/LICENSE.md`;
const radixUiUrl = "https://www.radix-ui.com";
const vercelUrl = "https://vercel.com";

export const footerItems = {
  copyright,
  version,
  sourceUrl,
  licenseUrl,
  radixUiUrl,
  vercelUrl,
} as const;
