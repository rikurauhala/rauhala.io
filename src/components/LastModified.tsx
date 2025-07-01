import { Text } from "@radix-ui/themes";

export const LastModified = ({ date }: { date: Date }) => {
  const formattedDate = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Text color="gray" size="2">
      Last modified on {formattedDate}
    </Text>
  );
};
