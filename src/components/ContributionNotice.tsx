import { Link, Section, Separator, Text } from "@radix-ui/themes";

import { footerItems } from "~/content/footer";

export const ContributionNotice = ({ projectId }: { projectId: string }) => {
  const fileUrl = `${footerItems.sourceUrl}/blob/main/src/content/projects/${projectId}.md`;

  return (
    <Section py="5">
      <Separator orientation="horizontal" size="4" mb="3" />
      <Text color="gray" size="2">
        Did you notice a typo?
      </Text>{" "}
      <Link href={fileUrl} size="2" underline="always">
        Edit this file on GitHub
      </Link>
    </Section>
  );
};
