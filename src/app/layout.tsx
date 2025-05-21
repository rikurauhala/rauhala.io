import { Theme } from "@radix-ui/themes";
import type { Metadata, Viewport } from "next";

import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/NavBar";
import { TOP_BAR_HEIGHT } from "~/constants";
import { author } from "~/content/info";
import { inter } from "~/utils/fonts";
import "~/utils/radix";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s - ${author.name}`,
    default: author.name,
  },
  description: `${author.profession} from ${author.location}`,
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#3E63DD",
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
            <NavBar />
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
