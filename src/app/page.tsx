import { Flex } from "@radix-ui/themes";

import { AboutSection } from "~/components/AboutSection";
import { CareerSection } from "~/components/CareerSection";
import { ContactSection } from "~/components/ContactSection";
import { EducationSection } from "~/components/EducationSection";
import { InfoSection } from "~/components/InfoSection";
import { SectionWrapper } from "~/components/SectionWrapper";

export default function Home() {
  const sections = [
    { component: InfoSection, key: "info", title: null },
    { component: AboutSection, key: "about", title: "About" },
    { component: CareerSection, key: "career", title: "Career" },
    { component: EducationSection, key: "education", title: "Education" },
    { component: ContactSection, key: "contact", title: "Contact" },
  ] as const;

  return (
    <Flex direction="column">
      {sections.map(({ component: Component, key, title }, index) => (
        <SectionWrapper
          darkBackground={index % 2 === 1}
          key={key}
          title={title}
        >
          <Component />
        </SectionWrapper>
      ))}
    </Flex>
  );
}
