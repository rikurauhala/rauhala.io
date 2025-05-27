import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownContainer } from "~/components/MarkdownContainer";
import { SectionWrapper } from "~/components/SectionWrapper";
import { author } from "~/content/info";
import { getProjectById, getProjectIds } from "~/lib/projects";
import { ProjectId } from "~/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectId>;
}): Promise<Metadata> {
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    return notFound();
  }

  return {
    title: project.name,
    description: `Project ${project.name} described by ${author.name}`,
  };
}

export async function generateStaticParams() {
  return await getProjectIds();
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<ProjectId>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return notFound();
  }

  return (
    <SectionWrapper>
      <MarkdownContainer content={project.content} />
    </SectionWrapper>
  );
}
