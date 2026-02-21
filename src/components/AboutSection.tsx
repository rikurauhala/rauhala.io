import { TextContainer } from "~/components/TextContainer";
import { getContentFromFile } from "~/lib/markdown";

export const AboutSection = async () => {
  const content = await getContentFromFile("about");
  return <TextContainer content={content} />;
};
