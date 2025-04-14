import { Card, Flex } from "@radix-ui/themes";

import { HyperLink } from "~/components/HyperLink";
import { authorUrl, licenseUrl, sourceUrl } from "~/content/footer";

export const Footer = () => {
  const items = [
    { key: "author", text: "Author", url: authorUrl },
    { key: "source", text: "Source code", url: sourceUrl },
    { key: "license", text: "License", url: licenseUrl },
  ];

  return (
    <Card>
      <Flex
        align="center"
        direction={{ xs: "column", sm: "row" }}
        gap="4"
        justify="center"
      >
        {items.map(({ key, text, url }) => (
          <HyperLink key={key} href={url} text={text} />
        ))}
      </Flex>
    </Card>
  );
};
