import { Container, Heading, Section } from "@radix-ui/themes";

export const SectionWrapper = ({
  children,
  darkBackground,
  title,
}: Readonly<{
  children: React.ReactNode;
  darkBackground?: boolean;
  title?: string | null;
}>) => {
  return (
    <Section
      py="8"
      style={{
        backgroundColor: darkBackground ? "var(--gray-1)" : "var(--gray-2)",
      }}
    >
      <Container px="5" size="3">
        {title && (
          <Heading as="h2" size="6">
            {title}
          </Heading>
        )}
        {children}
      </Container>
    </Section>
  );
};
