import { Button } from "@radix-ui/themes";
import Link from "next/link";

export const ReadMoreButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/projects/${id}`} passHref style={{ flex: 1 }}>
      <Button style={{ width: "100%" }} variant="solid">
        Read more
      </Button>
    </Link>
  );
};
