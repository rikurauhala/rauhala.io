import { AspectRatio } from "@radix-ui/themes";
import NextImage from "next/image";

export const Image = ({ alt, src }: { alt?: string; src?: string }) => {
  if (!alt || !src) {
    return null;
  }

  return (
    <AspectRatio asChild className="common" ratio={1920 / 1080}>
      <NextImage alt={alt} fill src={src} />
    </AspectRatio>
  );
};
