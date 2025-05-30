import { Link as RadixLink } from "@radix-ui/themes";

export const Link = ({
  children,
  href,
}: {
  children?: React.ReactNode;
  href?: string;
}) => {
  return (
    <RadixLink href={href} underline="always">
      {children}
    </RadixLink>
  );
};
