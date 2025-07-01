import { Text } from "@radix-ui/themes";

export const LastModified = ({ date }: { date: string }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Text color="gray" size="2">
      Last modified on {formattedDate}
    </Text>
  );
};
