import { Card, Heading, Text } from "@radix-ui/themes";

import { Project } from "~/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <Heading as="h3" size="4">
        {project.name}
      </Heading>
      <Text as="p" color="gray">
        {project.description}
      </Text>
    </Card>
  );
};
