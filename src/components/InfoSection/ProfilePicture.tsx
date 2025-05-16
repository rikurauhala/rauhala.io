import { Box } from "@radix-ui/themes";
import Image from "next/image";

import { author } from "~/content/info";
import { getBorderGradient } from "~/utils/color";

export const ProfilePicture = () => {
  const size = 160;

  return (
    <Box
      style={{
        background: getBorderGradient(),
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        padding: "2px",
      }}
    >
      <Image
        alt={`Profile picture of ${author.name}`}
        height={size}
        width={size}
        priority
        src="/img/riku-rauhala.webp"
        style={{
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};
