import { degrees } from "~/content/education";
import { TimelineSection } from "./TimelineSection";

export const EducationSection = () => (
  <TimelineSection
    items={degrees.map((degree) => ({
      id: degree.id,
      title: degree.name,
      subtitle: degree.institution,
      startTime: degree.startTime,
      endTime: degree.endTime,
      description: degree.description,
    }))}
  />
);
