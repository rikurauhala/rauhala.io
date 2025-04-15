import { Flex, Text } from "@radix-ui/themes";

import { HyperLink } from "~/components/HyperLink";
import { footerItems } from "~/content/footer";

export const Footer = () => {
  const links = [
    { key: "source", text: "Source code", url: footerItems.sourceUrl },
    { key: "license", text: "License", url: footerItems.licenseUrl },
    { key: "radix", text: "Built with Radix", url: footerItems.radixUiUrl },
    { key: "vercel", text: "Deployed to Vercel", url: footerItems.vercelUrl },
  ] as const;

  return (
    <Flex
      align="center"
      direction={{ initial: "column", md: "row" }}
      gap="8"
      justify="between"
    >
      <Flex
        align={{ initial: "center", md: "start" }}
        direction="column"
        gap="1"
      >
        <Text color="gray">{footerItems.copyright}</Text>
        <Text color="gray">{footerItems.madeInText}</Text>
      </Flex>
      <Flex align="center" direction={{ initial: "column", md: "row" }} gap="4">
        {links.map(({ key, text, url }) => (
          <HyperLink key={key} href={url} text={text} />
        ))}
      </Flex>
    </Flex>
  );
};
