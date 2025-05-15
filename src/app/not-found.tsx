import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";

import { getTitle } from "~/utils/meta";

export const metadata: Metadata = {
  title: getTitle("Not found"),
  description: "Not found",
};

export default function NotFound() {
  return (
    <Section py="8">
      <Container px="5" size="3">
        <Flex direction="column" gap="4">
          <Image
            alt={`Illustration of a sad puppy looking at a page that has been eaten`}
            src={`/img/undraw/page-eaten.svg`}
            height={750 / 3}
            width={645 / 3}
          />
          <Heading as="h1" size="6">
            Not found
          </Heading>
          <Text color="gray">This page does not exist</Text>
          <Box>
            <Link href="/">Go back to the front page</Link>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
