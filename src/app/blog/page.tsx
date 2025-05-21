import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog about software engineering, web development, and more",
};

export default function BlogPage() {
  return (
    <Section py="6">
      <Container px="5" size="3">
        <Flex direction="column" gap="4">
          <Heading as="h1" size="6">
            Blog
          </Heading>
          <Text color="gray">Coming soon!</Text>
        </Flex>
      </Container>
    </Section>
  );
}
