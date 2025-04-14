import { Flex } from "@radix-ui/themes";

import { AboutSection } from "~/components/AboutSection";
import { ContactSection } from "~/components/ContactSection";
import { Footer } from "~/components/Footer";
import { InfoSection } from "~/components/InfoSection";
import { ProjectsSection } from "~/components/ProjectsSection";
import { SectionWrapper } from "~/components/SectionWrapper";

export default function Home() {
  const sections = [
    { component: InfoSection, key: "info" },
    { component: AboutSection, key: "about" },
    { component: ProjectsSection, key: "projects" },
    { component: ContactSection, key: "contact" },
    { component: Footer, key: "footer" },
  ];

  return (
    <Flex direction="column">
      {sections.map(({ component: Component, key }, index) => (
        <SectionWrapper backgroundVariant={index % 2 == 0} key={key}>
          <Component />
        </SectionWrapper>
      ))}
    </Flex>
  );
}
