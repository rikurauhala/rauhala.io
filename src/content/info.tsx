import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LaptopIcon,
  LinkedInLogoIcon,
  SewingPinFilledIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import he from "he";

import { HyperLink } from "~/components/HyperLink";
import { InfoItem } from "~/types";

export const name = "Riku Rauhala";

export const aboutItems: InfoItem[] = [
  {
    key: "profession",
    icon: <LaptopIcon />,
    title: "Profession",
    value: "Software developer",
  },
  {
    key: "education",
    icon: <StarFilledIcon />,
    title: "Education",
    value: "B.Sc. in computer science",
  },
  {
    key: "location",
    icon: <SewingPinFilledIcon />,
    title: "Location",
    value: "Helsinki",
  },
];

const letters = [
  "&#x6D;",
  "&#x61;",
  "&#x69;",
  "&#x6C;",
  "&#x74;",
  "&#x6F;",
  "&#x3A;",
  "&#x72;",
  "&#x69;",
  "&#x6B;",
  "&#x75;",
  "&#x40;",
  "&#x72;",
  "&#x61;",
  "&#x75;",
  "&#x68;",
  "&#x61;",
  "&#x6C;",
  "&#x61;",
  "&#x2E;",
  "&#x69;",
  "&#x6F;",
] as const;

export const onlineItems: InfoItem[] = [
  {
    key: "gitHub",
    icon: <GitHubLogoIcon />,
    title: "GitHub",
    value: (
      <HyperLink href="https://github.com/rikurauhala" text="rikurauhala" />
    ),
  },
  {
    key: "linkedIn",
    icon: <LinkedInLogoIcon />,
    title: "LinkedIn",
    value: (
      <HyperLink
        href="https://linkedin.com/in/rikurauhala"
        text="rikurauhala"
      />
    ),
  },
  {
    key: "email",
    icon: <EnvelopeClosedIcon />,
    title: "Email",
    value: (
      <HyperLink href={he.decode(letters.join(""))} text="click to send" />
    ),
  },
];
