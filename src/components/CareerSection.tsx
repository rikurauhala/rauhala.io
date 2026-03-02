import { positions } from "~/content/career";
import { TimelineSection } from "./TimelineSection";

export const CareerSection = () => (
  <TimelineSection
    items={positions.map((position) => ({
      id: position.id,
      title: position.title,
      subtitle: position.organisation.name,
      subtitleUrl: position.organisation.url,
      startTime: position.startTime,
      endTime: position.endTime,
      description: position.description,
    }))}
  />
);
