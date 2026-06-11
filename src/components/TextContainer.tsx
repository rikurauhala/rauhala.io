import { Flex, Text } from "@radix-ui/themes";

export const TextContainer = ({ content }: { content: string }) => {
  return (
    <Flex direction="column" gap="3">
      {content.split("\n\n").map((line, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Reasonable to use here.
        <Text key={index} as="p">
          {line}
        </Text>
      ))}
    </Flex>
  );
};
