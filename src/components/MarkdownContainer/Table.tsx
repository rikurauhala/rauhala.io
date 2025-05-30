import { Table as Table } from "@radix-ui/themes";

export const TableBody = ({ children }: { children?: React.ReactNode }) => {
  return <Table.Body tabIndex={0}>{children}</Table.Body>;
};

export const TableCell = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <Table.Cell style={style}>{children}</Table.Cell>;
};

export const TableHeader = ({ children }: { children?: React.ReactNode }) => {
  return <Table.Header>{children}</Table.Header>;
};

export const TableHeaderCell = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <Table.ColumnHeaderCell style={style}>{children}</Table.ColumnHeaderCell>
  );
};

export const TableRoot = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Table.Root className="common" layout="auto" variant="surface">
      {children}
    </Table.Root>
  );
};

export const TableRow = ({ children }: { children?: React.ReactNode }) => {
  return <Table.Row>{children}</Table.Row>;
};
