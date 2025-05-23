import { Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";

import { ProjectDetails } from "~/types";
import { ProjectImage } from "./ProjectImage";

export const ProjectCard = ({ project }: { project: ProjectDetails }) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <Inset clip="padding-box" pb="current" side="top">
        <ProjectImage image={project.image} projectName={project.name} />
      </Inset>
      <Flex direction="column" gap="2" style={{ flex: 1 }}>
        <Heading as="h3" size="4">
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        </Heading>
        <Text as="p" color="gray">
          {project.description}
        </Text>
      </Flex>
    </Card>
  );
};
