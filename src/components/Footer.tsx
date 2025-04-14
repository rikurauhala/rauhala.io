import { Flex, Text } from "@radix-ui/themes";

import { HyperLink } from "~/components/HyperLink";
import { footerItems } from "~/content/footer";

export const Footer = () => {
  const links = [
    { key: "source", text: "Source code", url: footerItems.sourceUrl },
    { key: "license", text: "License", url: footerItems.licenseUrl },
    { key: "radix", text: "UI Components", url: footerItems.radixUiUrl },
  ];

  return (
    <Flex
      align="center"
      direction={{ xs: "column", sm: "row" }}
      gap="8"
      justify="between"
    >
      <Flex align={{ xs: "center", sm: "start" }} gap="1" direction="column">
        <Text color="gray">{footerItems.copyright}</Text>
        <Text color="gray">{footerItems.madeInText}</Text>
      </Flex>
      <Flex align="center" gap="4" direction={{ xs: "column", sm: "row" }}>
        {links.map(({ key, text, url }) => (
          <HyperLink key={key} href={url} text={text} />
        ))}
      </Flex>
    </Flex>
  );
};
