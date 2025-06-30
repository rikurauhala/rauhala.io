import { Badge, Tooltip } from "@radix-ui/themes";

export const UnderConstructionBadge = () => {
  return (
    <Tooltip
      content="The site is being updated. Content may be missing."
      side="left"
    >
      <Badge color="crimson" variant="outline">
        Under construction
      </Badge>
    </Tooltip>
  );
};
