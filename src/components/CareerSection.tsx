import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { positions } from "~/content/career";
import { formatMonthYear } from "~/utils/date";

export const CareerSection = () => {
  const sortedPositions = [...positions].sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
  );

  return (
    <Flex direction="column" gap="4">
      {sortedPositions.map((position, index) => (
        <Flex key={position.id} direction="column" gap="2">
          <Heading as="h3" size="4">
            {position.title}
          </Heading>
          <Text color="gray" size="2">
            {position.organisation} &bull; {formatMonthYear(position.startTime)}{" "}
            &ndash;{" "}
            {position.endTime ? formatMonthYear(position.endTime) : "Present"}
          </Text>
          {index < sortedPositions.length - 1 && <Separator my="3" size="4" />}
        </Flex>
      ))}
    </Flex>
  );
};
