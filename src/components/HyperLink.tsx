import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Flex, Link } from "@radix-ui/themes";

export const HyperLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Flex align="center" gap="1">
        {text}
        <OpenInNewWindowIcon />
      </Flex>
    </Link>
  );
};
