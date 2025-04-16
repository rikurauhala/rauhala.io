import { Box, Button } from "@radix-ui/themes";

export const ViewSourceButton = ({
  repository,
}: {
  repository: string | null;
}) => {
  const buttonText = "View source";

  if (!repository) {
    return (
      <Button disabled style={{ flex: 1, width: "100%" }} variant="outline">
        {buttonText}
      </Button>
    );
  }

  return (
    <Box style={{ flex: 1, width: "100%" }}>
      <a
        href={`https://github.com/${repository}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button style={{ width: "100%" }} variant="outline">
          {buttonText}
        </Button>
      </a>
    </Box>
  );
};
