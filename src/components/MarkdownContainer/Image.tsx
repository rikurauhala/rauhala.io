import { AspectRatio, Card, Inset, Text } from "@radix-ui/themes";
import NextImage from "next/image";

export const Image = ({ alt, src }: { alt?: string; src?: string }) => {
  if (!alt || !src) {
    return null;
  }

  return (
    <Card className="common">
      <Inset pb="current" side="top">
        <AspectRatio ratio={1920 / 1080}>
          <NextImage alt={alt} fill src={src} />
        </AspectRatio>
      </Inset>
      <Text as="span" color="gray" size="2">
        {alt}
      </Text>
    </Card>
  );
};
