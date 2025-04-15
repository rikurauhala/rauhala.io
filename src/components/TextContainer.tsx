import { Box, Text } from "@radix-ui/themes";

export const TextContainer = ({ content }: { content: string }) => {
  return (
    <Box>
      {content.split("\n\n").map((line, index) => (
        <Text key={index} as="p" mt="3">
          {line}
        </Text>
      ))}
    </Box>
  );
};
