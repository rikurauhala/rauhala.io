import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Flex, Link } from "@radix-ui/themes";

export const HyperLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Flex align="center" gap="1">
        {text}
        <AccessibleIcon label="opens in new tab">
          <OpenInNewWindowIcon />
        </AccessibleIcon>
      </Flex>
    </Link>
  );
};
