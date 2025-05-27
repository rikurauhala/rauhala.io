import { Text } from "@radix-ui/themes";

export const Paragraph = ({ children }: { children?: React.ReactNode }) => {
  const image = children && typeof children === "object" && "props" in children;
  if (image) {
    return <>{children}</>;
  }

  return (
    <Text as="p" className="common">
      {children}
    </Text>
  );
};
