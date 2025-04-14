import { Avatar, Box } from "@radix-ui/themes";

import { author } from "~/content/info";

export const ProfilePicture = () => {
  return (
    <Box
      style={{
        background: "linear-gradient(45deg, var(--crimson-11), var(--blue-11))",
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
