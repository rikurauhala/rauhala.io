import { Flex, Text } from "@radix-ui/themes";

import { HyperLink } from "~/components/HyperLink";
import { footerItems } from "~/content/footer";
import { SectionWrapper } from "./SectionWrapper";

export const Footer = () => {
  const links = [
    { key: "source", text: "Source code", url: footerItems.sourceUrl },
    { key: "license", text: "License", url: footerItems.licenseUrl },
    { key: "credits", text: "Credits", url: footerItems.creditsUrl },
    { key: "changelog", text: "Changelog", url: footerItems.changelogUrl },
  ] as const;

  return (
    <SectionWrapper darkBackground>
      <Flex
        align="center"
        direction={{ initial: "column-reverse", md: "row" }}
        gap="8"
        justify="between"
      >
        <Flex
          align={{ initial: "center", md: "start" }}
          direction="column"
          gap="1"
        >
          <Text color="gray">{footerItems.copyright}</Text>
          <Text color="gray">{footerItems.version}</Text>
        </Flex>
        <Flex
          align="center"
          direction={{ initial: "column", md: "row" }}
          gap="4"
        >
          {links.map(({ key, text, url }) => (
            <HyperLink key={key} href={url} text={text} />
          ))}
        </Flex>
      </Flex>
    </SectionWrapper>
  );
};
