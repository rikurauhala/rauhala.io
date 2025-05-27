import { Heading } from "@radix-ui/themes";

export const Heading2 = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h2" className="common" size="6">
      {children}
    </Heading>
  );
};
