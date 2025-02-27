import { ImageName } from "./image";

export enum ArticleName {
  Portfolio = "portfolio",
  ChessProject = "chess-project",
  RagProject = "rag-project",
}

export interface ArticleInfo {
  name: ArticleName;
  image: ImageName;
  fileName: string;
}

const articles: Record<ArticleName, ArticleInfo> = {
  [ArticleName.Portfolio]: {
    name: ArticleName.Portfolio,
    image: ImageName.Cat,
    fileName: "intro.md",
  },
  [ArticleName.ChessProject]: {
    name: ArticleName.ChessProject,
    image: ImageName.ChessGif,
    fileName: "chess-project.md",
  },
  [ArticleName.RagProject]: {
    name: ArticleName.RagProject,
    image: ImageName.RagGif,
    fileName: "rag-project.md",
  },
};

/**
 * Retrieves the article information by name.
 *
 * @param name - The name of the article.
 * @returns The article information if found, otherwise undefined.
 */
export function getArticleInfoByName(name: ArticleName): ArticleInfo {
  return articles[name];
}
