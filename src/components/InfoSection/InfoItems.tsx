import { Box, Flex, Text } from "@radix-ui/themes";

import { InfoItem } from "~/types";

export const InfoItems = ({ items }: { items: InfoItem[] }) => {
  return (
    <Box>
      {items.map(({ key, icon, title, value }) => (
        <Flex key={key} align="center" gap="2" direction="row" my="3">
          {icon}
          <Flex align="start" direction="column">
            <Text color="gray" size="1">
              {title}
            </Text>
            <Text size="3">{value}</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};
