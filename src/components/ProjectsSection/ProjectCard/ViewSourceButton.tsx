import { Button } from "@radix-ui/themes";

export const ViewSourceButton = ({
  repository,
}: {
  repository: string | null;
}) => {
  const buttonText = "View source";

  return (
    <Button
      asChild
      color="gray"
      disabled={!repository}
      style={{ flex: 1 }}
      variant="outline"
    >
      {repository ? (
        <a
          href={`https://github.com/${repository}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {buttonText}
        </a>
      ) : (
        <span>{buttonText}</span>
      )}
    </Button>
  );
};
