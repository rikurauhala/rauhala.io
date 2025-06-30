import { Container, Flex, TabNav } from "@radix-ui/themes";

import { TOP_BAR_HEIGHT } from "~/constants";
import { NavigationLink } from "./NavigationLink";
import { UnderConstructionBadge } from "./UnderConstructionBadge";

export const NavBar = () => {
  return (
    <Container
      px="5"
      size="3"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        height: TOP_BAR_HEIGHT,
        justifyContent: "center",
      }}
    >
      <Flex align="center" justify="between" gap="3">
        <TabNav.Root>
          <NavigationLink href="/" text="Home" />
          <NavigationLink href="/blog" text="Blog" />
        </TabNav.Root>
        <UnderConstructionBadge />
      </Flex>
    </Container>
  );
};
