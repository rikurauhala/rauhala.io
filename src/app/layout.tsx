import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";

import { author } from "~/content/info";
import { inter } from "~/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `${author.name}`,
  description: `${author.profession} from ${author.location}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Theme accentColor="blue" appearance="dark" grayColor="slate">
          {children}
        </Theme>
      </body>
    </html>
  );
}
