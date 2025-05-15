import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

import { Footer } from "~/components/Footer";
import { TopBar } from "~/components/TopBar";
import { TOP_BAR_HEIGHT } from "~/constants";
import { inter } from "~/utils/fonts";
import { getDescription, getTitle } from "~/utils/meta";
import "~/utils/radix";
import "./globals.css";

export const metadata: Metadata = {
  title: getTitle(),
  description: getDescription(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Theme
          accentColor="indigo"
          appearance="dark"
          grayColor="slate"
          style={{
            backgroundColor: "var(--gray-2)",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <nav
            style={{
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 69,
            }}
          >
            <TopBar />
          </nav>
          <main style={{ flex: 1, paddingTop: TOP_BAR_HEIGHT }}>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Theme>
      </body>
    </html>
  );
}
