import { Avatar } from "@radix-ui/themes";

export const ProfilePicture = () => {
  return (
    <Avatar
      alt="Profile picture"
      fallback="R"
      radius="full"
      size="9"
      src="/img/profile.png"
      title="Profile picture"
    />
  );
};
