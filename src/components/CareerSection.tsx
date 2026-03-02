import { Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";

import { positions } from "~/content/career";
import { formatMonthYear } from "~/utils/date";
import { PresentText } from "./PresentText";
import { TextContainer } from "./TextContainer";

export const CareerSection = () => {
  const sortedPositions = [...positions].sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
  );

  return (
    <Flex direction="column" gap="4">
      {sortedPositions.map((position, index) => (
        <Flex key={position.id} direction="column" gap="2">
          <Flex direction="column" gap="1">
            <Heading as="h3" size="4">
              {position.title}
            </Heading>
            <Flex align="center" direction="row" gap="2">
              <Link href={position.organisation.url} size="2">
                {position.organisation.name}
              </Link>
              <Text color="gray" size="2">
                &#47;
              </Text>
              <Text color="gray" size="2">
                {formatMonthYear(position.startTime)} &ndash;{" "}
                {position.endTime ? (
                  formatMonthYear(position.endTime)
                ) : (
                  <PresentText />
                )}
              </Text>
            </Flex>
          </Flex>
          <TextContainer content={position.description} />
          {index < sortedPositions.length - 1 && <Separator my="3" size="4" />}
        </Flex>
      ))}
    </Flex>
  );
};
