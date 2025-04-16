import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { author } from "~/content/info";
import { ContactButton } from "./ContactButton";
import { ProfilePicture } from "./ProfilePicture";

export const InfoSection = () => {
  return (
    <Flex align="center" direction="column" gap="4" justify="center">
      <ProfilePicture />
      <Heading as="h1" size="8">
        {author.name}
      </Heading>
      <Flex align="center" direction="column" gap="1">
        <Text as="p" size="4" style={{ color: "var(--accent-11)" }}>
          {author.profession}
        </Text>
        <Text as="p" color="gray">
          {author.location}
        </Text>
      </Flex>
      <Flex align="center" direction="row" gap="4">
        <ContactButton variant="gitHub" />
        <Separator orientation="vertical" />
        <ContactButton variant="linkedIn" />
      </Flex>
    </Flex>
  );
};
