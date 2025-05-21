import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { AccessibleIcon, Button } from "@radix-ui/themes";

import { contact } from "~/content/info";

type Variant = "email" | "gitHub" | "linkedIn";

export const ContactButton = ({ variant }: { variant: Variant }) => {
  const variants: Record<
    Variant,
    { href: string; icon: React.ReactNode; label: string }
  > = {
    email: {
      href: `mailto:${process.env.EMAIL_ADDRESS}`,
      icon: <EnvelopeClosedIcon />,
      label: "Email",
    },
    gitHub: {
      href: `https://github.com/${contact.gitHub}`,
      icon: <GitHubLogoIcon />,
      label: "GitHub",
    },
    linkedIn: {
      href: `https://linkedin.com/in/${contact.linkedIn}`,
      icon: <LinkedInLogoIcon />,
      label: "LinkedIn",
    },
  } as const;

  const selectedVariant = variants[variant];

  return (
    <Button asChild variant="ghost">
      <a href={selectedVariant.href} rel="noopener noreferrer" target="_blank">
        <AccessibleIcon label={`${selectedVariant.label} icon`}>
          {selectedVariant.icon}
        </AccessibleIcon>
        {selectedVariant.label}
      </a>
    </Button>
  );
};
