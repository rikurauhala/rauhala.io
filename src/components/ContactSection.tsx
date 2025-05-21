import { Flex, Link, Text } from "@radix-ui/themes";

import { contact } from "~/content/info";

export const ContactSection = () => {
  return (
    <Flex direction="column" gap="4">
      <Text as="p" mt="3">
        Let&apos;s get in touch! You may{" "}
        <Link href={contact.email}>reach me via email</Link> or{" "}
        <Link href={contact.linkedIn}>send me a message on LinkedIn</Link>.
      </Text>
    </Flex>
  );
};
