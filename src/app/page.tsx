import { Container, Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="2">
        <Text>Hello there!</Text>
      </Flex>
    </Container>
  );
}
