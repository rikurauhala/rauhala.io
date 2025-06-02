import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

import { contact } from "~/content/info";

type Variant = "email" | "gitHub" | "linkedIn";

export const ContactButton = ({ variant }: { variant: Variant }) => {
  const variants: Record<
    Variant,
    { href: string; icon: React.ReactNode; label: string }
  > = {
    email: {
      href: contact.email,
      icon: <EnvelopeClosedIcon />,
      label: "Email",
    },
    gitHub: {
      href: contact.gitHub,
      icon: <GitHubLogoIcon />,
      label: "GitHub",
    },
    linkedIn: {
      href: contact.linkedIn,
      icon: <LinkedInLogoIcon />,
      label: "LinkedIn",
    },
  } as const;

  const selectedVariant = variants[variant];

  return (
    <Button asChild variant="ghost">
      <a href={selectedVariant.href} rel="noopener noreferrer" target="_blank">
        {selectedVariant.icon}
        {selectedVariant.label}
      </a>
    </Button>
  );
};
