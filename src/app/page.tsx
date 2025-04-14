import { Flex } from "@radix-ui/themes";

import { Footer } from "~/components/Footer";
import { Info } from "~/components/Info";

export default function Home() {
  return (
    <Flex direction="column" gap="4" my="4">
      <Info />
      <Footer />
    </Flex>
  );
}
