import { Avatar, Box } from "@radix-ui/themes";

import { author } from "~/content/info";
import { getBorderGradient } from "~/utils/color";

export const ProfilePicture = () => {
  return (
    <Box
      style={{
        background: getBorderGradient(),
        borderRadius: "50%",
        padding: "2px",
      }}
    >
      <Avatar
        alt={`Profile picture of ${author.name}`}
        fallback="R"
        radius="full"
        size="9"
        src="/img/riku-rauhala.jpg"
      />
    </Box>
  );
};
