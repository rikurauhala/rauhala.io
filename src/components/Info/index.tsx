import { Flex, Heading, Separator } from "@radix-ui/themes";

import { aboutItems, name, onlineItems } from "~/content/info";
import { InfoItems } from "./InfoItems";
import { ProfilePicture } from "./ProfilePicture";

export const Info = () => {
  return (
    <Flex
      align="center"
      direction={{ xs: "column", sm: "row" }}
      gap="4"
      justify="center"
    >
      <ProfilePicture />
      <Flex align="start" direction="column" gap="2" justify="between">
        <Heading as="h1">{name}</Heading>
        <Flex
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: "2", sm: "4" }}
        >
          <InfoItems items={aboutItems} />
          <Separator orientation="vertical" />
          <InfoItems items={onlineItems} />
        </Flex>
      </Flex>
    </Flex>
  );
};
