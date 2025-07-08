import { AspectRatio, Card, Inset, Text } from "@radix-ui/themes";
import NextImage from "next/image";
import type { ImgHTMLAttributes } from "react";

export const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const { alt, src } = props;

  if (!alt || !src || typeof src !== "string") {
    return null;
  }

  return (
    <Card className="common">
      <Inset pb="current" side="top">
        <AspectRatio ratio={16 / 9}>
          <NextImage alt={alt} fill src={src} />
        </AspectRatio>
      </Inset>
      <Text as="span" color="gray" size="2">
        {alt}
      </Text>
    </Card>
  );
};
