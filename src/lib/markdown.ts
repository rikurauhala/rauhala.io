import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const parseMarkdownFile = async (filePath: string): Promise<string> => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContent);

  return parsed.content;
};

export const getContentFromFile = async (fileName: string): Promise<string> => {
  const fullPath = path.join(process.cwd(), "src", "content", `${fileName}.md`);
  return parseMarkdownFile(fullPath);
};
