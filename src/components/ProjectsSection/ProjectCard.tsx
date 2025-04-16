import {
  AspectRatio,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Text,
} from "@radix-ui/themes";

import { Project } from "~/types";
import { getBackgroundGradient } from "~/utils/color";

export const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  project: Project;
}) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <Inset clip="padding-box" side="top" pb="current">
        <AspectRatio ratio={16 / 9}>
          <Box
            style={{
              background: getBackgroundGradient(index),
              height: "100%",
            }}
          />
        </AspectRatio>
      </Inset>
      <Flex direction="column" gap="4" style={{ flex: 1 }}>
        <Flex direction="column" flexGrow="1" gap="2">
          <Heading as="h3" size="4">
            {project.name}
          </Heading>
          <Text as="p" color="gray">
            {project.description}
          </Text>
        </Flex>
        <Flex direction="row" gap="2">
          <Button style={{ flex: 1 }} variant="outline">
            View source
          </Button>
          <Button style={{ flex: 1 }} variant="solid">
            Read more
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
