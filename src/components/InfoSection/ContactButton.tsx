import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { AccessibleIcon, Button } from "@radix-ui/themes";
import Link from "next/link";

import { contact } from "~/content/info";

type Variant = "email" | "gitHub" | "linkedIn";

export const ContactButton = ({ variant }: { variant: Variant }) => {
  const variants: Record<
    Variant,
    { href: string; icon: React.ReactNode; label: string }
  > = {
    email: {
      href: `mailto:${contact.email}`,
      icon: <EnvelopeClosedIcon />,
      label: "Email",
    },
    gitHub: {
      href: `https://github.com/${contact.gitHub}`,
      icon: <GitHubLogoIcon />,
      label: "GitHub",
    },
    linkedIn: {
      href: `https://www.linkedin.com/in/${contact.linkedIn}`,
      icon: <LinkedInLogoIcon />,
      label: "LinkedIn",
    },
  } as const;

  const selectedVariant = variants[variant];

  return (
    <Link
      tabIndex={-1}
      href={selectedVariant.href}
      passHref
      rel="noopener noreferrer"
      target="_blank"
    >
      <Button variant="ghost">
        <AccessibleIcon label={`${selectedVariant.label} icon`}>
          {selectedVariant.icon}
        </AccessibleIcon>
        {selectedVariant.label}
      </Button>
    </Link>
  );
};
