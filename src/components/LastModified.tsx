import { Text } from "@radix-ui/themes";

import { formatDate } from "~/utils/date";

export const LastModified = ({ date }: { date: string }) => {
  const formattedDate = formatDate(date);

  return (
    <Text color="gray" size="2">
      Last modified on {formattedDate}
    </Text>
  );
};
