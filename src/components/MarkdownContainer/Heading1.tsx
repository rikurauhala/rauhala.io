import { Heading } from "@radix-ui/themes";

export const Heading1 = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h1" className="common" size="8">
      {children}
    </Heading>
  );
};
