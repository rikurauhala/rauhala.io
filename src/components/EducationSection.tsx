import { Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { degrees } from "~/content/education";
import { formatMonthYear } from "~/utils/date";
import { PresentText } from "./PresentText";
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
            <Flex align="center" direction="row" gap="2">
              <Text color="gray" size="2">
                {degree.institution}
              </Text>
              <Text color="gray" size="2">
                &#47;
              </Text>
              <Text color="gray" size="2">
                {formatMonthYear(degree.startTime)} &ndash;{" "}
                {degree.endTime ? (
                  formatMonthYear(degree.endTime)
                ) : (
                  <PresentText />
                )}
              </Text>
            </Flex>
          </Flex>
          <TextContainer content={degree.description} />
          {index < sortedDegrees.length - 1 && <Separator my="3" size="4" />}
        </Flex>
      ))}
    </Flex>
  );
};
