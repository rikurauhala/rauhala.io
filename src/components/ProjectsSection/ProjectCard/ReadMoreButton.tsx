import { Button } from "@radix-ui/themes";
import Link from "next/link";

export const ReadMoreButton = ({ id }: { id: string }) => {
  return (
    <Button asChild style={{ flex: 1 }} variant="solid">
      <Link href={`/projects/${id}`}>Read more</Link>
    </Button>
  );
};
