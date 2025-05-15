import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";

import { Footer } from "~/components/Footer";
import { TopBar } from "~/components/TopBar";
import { author } from "~/content/info";
import { inter } from "~/utils/fonts";
import "~/utils/radix";
import "./globals.css";
import { TOP_BAR_HEIGHT } from "~/constants";

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
        <Theme
          accentColor="indigo"
          appearance="dark"
          grayColor="slate"
          style={{
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
