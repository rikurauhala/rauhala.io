import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Image } from "./Image";
import { Link } from "./Link";
import { Paragraph } from "./Paragraph";
import {
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "./Table";
import "./style.css";

export const MarkdownContainer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: Link,
        h1: Heading1,
        h2: Heading2,
        img: Image,
        p: Paragraph,
        table: TableRoot,
        tbody: TableBody,
        td: TableCell,
        th: TableHeaderCell,
        thead: TableHeader,
        tr: TableRow,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
};
