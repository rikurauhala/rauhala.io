import { Flex } from "@radix-ui/themes";

import { About } from "~/components/About";
import { ContentSection } from "~/components/ContentSection";
import { Footer } from "~/components/Footer";
import { Info } from "~/components/Info";

export default function Home() {
  const sections = [
    { component: Info, key: "info" },
    { component: About, key: "about" },
  ];

  return (
    <Flex direction="column">
      {sections.map(({ component: Component, key }, index) => (
        <ContentSection backgroundVariant={index % 2 == 0} key={key}>
          <Component />
        </ContentSection>
      ))}
      <Footer />
    </Flex>
  );
}
