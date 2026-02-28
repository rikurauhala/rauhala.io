import { Flex, Text } from "@radix-ui/themes";

export const TextContainer = ({ content }: { content: string }) => {
  return (
    <Flex direction="column" gap="3">
      {content.split("\n\n").map((line, index) => (
        <Text key={index} as="p">
          {line}
        </Text>
      ))}
    </Flex>
  );
};
