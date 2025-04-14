import { Box, Heading, Text } from "@radix-ui/themes";

export const TextContainer = ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  return (
    <Box>
      <Heading as="h2">{title}</Heading>
      {content.split("\n\n").map((line, index) => (
        <Text key={index} as="p" mt="3">
          {line}
        </Text>
      ))}
    </Box>
  );
};
