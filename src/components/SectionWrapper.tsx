import { Container, Section } from "@radix-ui/themes";

export const SectionWrapper = ({
  backgroundVariant,
  children,
}: {
  backgroundVariant: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Section
      style={{
        backgroundColor: backgroundVariant ? "var(--gray-1)" : "var(--gray-2)",
      }}
    >
      <Container size="3">{children}</Container>
    </Section>
  );
};
