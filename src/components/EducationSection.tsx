import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { degrees } from "~/content/education";
import { formatMonthYear } from "~/utils/date";
import { TextContainer } from "./TextContainer";

export const EducationSection = () => {
  const sortedDegrees = [...degrees].sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
  );

  return (
    <Flex direction="column" gap="4">
      {sortedDegrees.map((degree, index) => (
        <Flex key={degree.id} direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Heading as="h3" size="4">
              {degree.name}
            </Heading>
            <Text color="gray" size="2">
              {degree.institution} &bull; {formatMonthYear(degree.startTime)}{" "}
              &ndash;{" "}
              {degree.endTime ? formatMonthYear(degree.endTime) : "Present"}
            </Text>
          </Flex>
          <TextContainer content={degree.description} />
          {index < sortedDegrees.length - 1 && <Separator my="3" size="4" />}
        </Flex>
      ))}
    </Flex>
  );
};
