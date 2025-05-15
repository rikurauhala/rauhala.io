import { Text } from "@radix-ui/themes";
import Link from "next/link";

export const NavigationLink = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Text color="indigo">{text}</Text>
    </Link>
  );
};
