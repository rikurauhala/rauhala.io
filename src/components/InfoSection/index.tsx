import { Flex, Heading, Text } from "@radix-ui/themes";

import { author } from "~/content/info";
import { ProfilePicture } from "./ProfilePicture";

export const InfoSection = () => {
  return (
    <Flex align="center" direction="column" gap="4" justify="center">
      <ProfilePicture />
      <Heading as="h1" size="8">
        {author.name}
      </Heading>
      <Flex align="center" direction="column">
        <Text as="span" style={{ color: "var(--accent-11)" }}>
          {author.profession}
        </Text>
        <Text color="gray" as="span">
          {author.location}
        </Text>
      </Flex>
    </Flex>
  );
};
