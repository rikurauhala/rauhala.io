import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";

import { TextContainer } from "~/components/TextContainer";
import { contactSectionContent } from "~/content/contact";

export const ContactSection = () => {
  return (
    <Flex direction="column" gap="4">
      <TextContainer content={contactSectionContent} />
      <Flex direction="column" gap="3">
        <Box>
          <Text color="gray" size="2">
            Your name
          </Text>
          <TextField.Root placeholder="Type your name here">
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Box>
          <Text color="gray" size="2">
            Your email address
          </Text>
          <TextField.Root
            placeholder="Type your email address here"
            type="email"
          >
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Box>
          <Text color="gray" size="2">
            Your message
          </Text>
          <TextArea placeholder="Type your message here" resize="vertical" />
        </Box>

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
