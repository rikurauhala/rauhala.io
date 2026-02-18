import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
  description: "Not found",
};

export default function NotFound() {
  return (
    <Section py="8">
      <Container px="5" size="3">
        <Flex direction="column" gap="4">
          <Heading as="h1" size="6">
            Not found
          </Heading>
          <Text color="gray">This page does not exist</Text>
          <Box>
            <Link href="/">Go back to the home page</Link>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
