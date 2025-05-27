import ReactMarkdown from "react-markdown";

import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Image } from "./Image";
import { Link } from "./Link";
import { Paragraph } from "./Paragraph";
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
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
