import { MoonIcon } from "@radix-ui/react-icons";
import { Container, Flex, IconButton } from "@radix-ui/themes";

import { TOP_BAR_HEIGHT } from "~/constants";
import { NavigationLink } from "./NavigationLink";

export const TopBar = () => {
  return (
    <Container
      px="5"
      size="3"
      style={{
        backgroundColor: "var(--indigo-2)",
        height: TOP_BAR_HEIGHT,
        justifyContent: "center",
      }}
    >
      <Flex align="center" justify="between">
        <Flex gap="3">
          <NavigationLink href="/" text="Home" />
          <NavigationLink href="/blog" text="Blog" />
        </Flex>
        <IconButton variant="ghost">
          <MoonIcon />
        </IconButton>
      </Flex>
    </Container>
  );
};
