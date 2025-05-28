const copyright = "© 2025 Riku Rauhala";
const version = `Version ${process.env.npm_package_version}`;
const sourceUrl = `https://github.com/rikurauhala/rauhala.io`;
const licenseUrl = `${sourceUrl}/blob/main/LICENSE.md`;
const creditsUrl = `${sourceUrl}/blob/main/docs/credits.md`;
const changelogUrl = `${sourceUrl}/releases`;

export const footerItems = {
  copyright,
  version,
  sourceUrl,
  licenseUrl,
  creditsUrl,
  changelogUrl,
} as const;
