import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextArea, TextField } from "@radix-ui/themes";

import { TextContainer } from "~/components/TextContainer";
import { contactSectionContent } from "~/content/contact";

export const ContactSection = () => {
  return (
    <Flex direction="column" gap="4">
      <TextContainer content={contactSectionContent} />
      <Flex direction="column" gap="4">
        <TextField.Root placeholder="Your name">
          <TextField.Slot>
            <PersonIcon />
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder="Your email address" type="email">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
        <TextArea placeholder="Your message" resize="vertical" />
        <Flex direction="row" gap="3">
          <Button style={{ flex: 1 }} variant="outline">
            Clear form
          </Button>
          <Button style={{ flex: 1 }} variant="solid">
            Send message
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
