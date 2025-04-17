import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

import { author } from "~/content/info";
import { inter } from "~/utils/fonts";
import "~/utils/radix";
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
        <Theme accentColor="indigo" appearance="dark" grayColor="slate">
          {children}
        </Theme>
      </body>
    </html>
  );
}
