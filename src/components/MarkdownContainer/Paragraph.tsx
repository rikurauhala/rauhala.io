import { Text } from "@radix-ui/themes";

export const Paragraph = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Text as="p" className="common">
      {children}
    </Text>
  );
};
