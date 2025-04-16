import {
  AspectRatio,
  Box,
  Card,
  Flex,
  Heading,
  Inset,
  Text,
} from "@radix-ui/themes";

import { Project } from "~/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <Inset clip="padding-box" side="top" pb="current">
        <AspectRatio ratio={16 / 9}>
          <Box
            style={{
              background:
                "linear-gradient(45deg, var(--crimson-10), var(--blue-10))",
              height: "100%",
            }}
          />
        </AspectRatio>
      </Inset>
      <Flex direction="column" gap="2">
        <Heading as="h3" size="4">
          {project.name}
        </Heading>
        <Text as="p" color="gray">
          {project.description}
        </Text>
      </Flex>
    </Card>
  );
};
