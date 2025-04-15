import { Container, Heading, Section } from "@radix-ui/themes";

export const SectionWrapper = ({
  backgroundVariant,
  children,
  title,
}: {
  backgroundVariant: boolean;
  children: React.ReactNode;
  title: string | null;
}) => {
  return (
    <Section
      py="8"
      style={{
        backgroundColor: backgroundVariant ? "var(--gray-1)" : "var(--gray-2)",
      }}
    >
      <Container px="5" size="3">
        {title && <Heading as="h2">{title}</Heading>}
        {children}
      </Container>
    </Section>
  );
};
