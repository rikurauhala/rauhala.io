import { Code as RadixCode } from "@radix-ui/themes";

export const Code = ({ children }: { children?: React.ReactNode }) => {
  return <RadixCode color="crimson">{children}</RadixCode>;
};
