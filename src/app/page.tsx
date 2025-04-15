import { Flex } from "@radix-ui/themes";

import { AboutSection } from "~/components/AboutSection";
import { ContactSection } from "~/components/ContactSection";
import { Footer } from "~/components/Footer";
import { InfoSection } from "~/components/InfoSection";
import { ProjectsSection } from "~/components/ProjectsSection";
import { SectionWrapper } from "~/components/SectionWrapper";

export default function Home() {
  const sections = [
    { component: InfoSection, key: "info", title: null },
    { component: AboutSection, key: "about", title: "About" },
    { component: ProjectsSection, key: "projects", title: "Projects" },
    { component: ContactSection, key: "contact", title: "Contact" },
    { component: Footer, key: "footer", title: null },
  ] as const;

  return (
    <Flex direction="column">
      {sections.map(({ component: Component, key, title }, index) => (
        <SectionWrapper
          backgroundVariant={index % 2 == 0}
          key={key}
          title={title}
        >
          <Component />
        </SectionWrapper>
      ))}
    </Flex>
  );
}
