import { Box, Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";

import { formatMonthYear } from "~/utils/date";
import { PresentText } from "./PresentText";
import { TextContainer } from "./TextContainer";

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  subtitleUrl?: string;
  startTime: string;
  endTime?: string | null;
  description: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

export const TimelineSection = ({ items }: TimelineSectionProps) => {
  const sorted = [...items].sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
  );

  return (
    <Flex direction="column" gap="4">
      {sorted.map((item, index) => (
        <Flex key={item.id} direction="column" gap="2">
          <Flex direction="column" gap="1">
            <Heading as="h3" size="4">
              {item.title}
            </Heading>
            <Flex
              align={{ initial: "start", sm: "center" }}
              direction={{ initial: "column", sm: "row" }}
              gap={{ initial: "1", sm: "2" }}
            >
              {item.subtitleUrl ? (
                <Link href={item.subtitleUrl} size="2">
                  {item.subtitle}
                </Link>
              ) : (
                <Text color="gray" size="2">
                  {item.subtitle}
                </Text>
              )}
              <Box display={{ initial: "none", sm: "block" }}>
                <Text color="gray" size="2">
                  &#47;
                </Text>
              </Box>
              <Text color="gray" size="2">
                {formatMonthYear(item.startTime)} &ndash;{" "}
                {item.endTime ? formatMonthYear(item.endTime) : <PresentText />}
              </Text>
            </Flex>
          </Flex>
          <TextContainer content={item.description} />
          {index < sorted.length - 1 && <Separator my="3" size="4" />}
        </Flex>
      ))}
    </Flex>
  );
};
