import { Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";

import { Project } from "~/types";
import { ReadMoreButton } from "./ReadMoreButton";
import { ProjectImage } from "./ProjectImage";
import { ViewSourceButton } from "./ViewSourceButton";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <Inset clip="padding-box" pb="current" side="top">
        <ProjectImage image={project.image} projectName={project.name} />
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
        <Inset side="bottom">
          <Box
            p="3"
            style={{
              backgroundColor: "var(--gray-4)",
            }}
          >
            <Flex direction="row" gap="3">
              <ViewSourceButton repository={project.repository} />
              <ReadMoreButton id={project.id} />
            </Flex>
          </Box>
        </Inset>
      </Flex>
    </Card>
  );
};
