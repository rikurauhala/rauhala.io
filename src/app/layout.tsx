import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riku Rauhala",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Theme appearance="dark">{children}</Theme>
      </body>
    </html>
  );
}
