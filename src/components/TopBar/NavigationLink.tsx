"use client";

import { TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationLink = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  console.log("href", href);

  return (
    <TabNav.Link active={href === pathname} asChild>
      <Link href={href}>{text}</Link>
    </TabNav.Link>
  );
};
