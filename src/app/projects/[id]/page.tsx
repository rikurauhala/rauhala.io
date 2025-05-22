import { Heading, Text } from "@radix-ui/themes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionWrapper } from "~/components/SectionWrapper";
import { author } from "~/content/info";
import { projects } from "~/content/projects";

type Params = { id: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return notFound();
  }

  return {
    title: project.name,
    description: `Project ${project.name} described by ${author.name}`,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);
  if (!project) {
    return notFound();
  }

  return (
    <SectionWrapper>
      <Heading as="h1">{project.name}</Heading>
      <Text color="gray">content</Text>
    </SectionWrapper>
  );
}
