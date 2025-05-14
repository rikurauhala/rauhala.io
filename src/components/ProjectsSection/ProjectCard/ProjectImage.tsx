import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";

export const ProjectImage = ({
  image,
  projectName,
}: {
  image: string | null;
  projectName: string;
}) => {
  return (
    <AspectRatio ratio={16 / 9} style={{ backgroundColor: "var(--blue-1)" }}>
      {image && (
        <Image
          alt={`Illustration for project ${projectName}`}
          fill
          src={`img/undraw/${image}.svg`}
          style={{ padding: 50 }}
        />
      )}
    </AspectRatio>
  );
};
