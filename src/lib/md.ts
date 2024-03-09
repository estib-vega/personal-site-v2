import fs from "fs";
import path from "path";

const MD_DIR_PATH = "src/static/md";

/**
 * Retrieves the text content of a markdown file.
 *
 * @param fileName - The name of the markdown file.
 * @returns The content of the markdown file as a string.
 */
export function getMarkdownFile(fileName: string): string {
  const filePath = path.join(MD_DIR_PATH, fileName);
  return fs.readFileSync(filePath, "utf-8");
}
