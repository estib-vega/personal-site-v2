import { ImageInfo, ImageName, getImageInfoByName } from "./image";

export enum ArticleName {
  Portfolio = "portfolio",
}


export interface ArticleInfo {
  name: ArticleName;
  image: ImageInfo;
  fileName: string;
}

const articles: Record<ArticleName, ArticleInfo> = {
  [ArticleName.Portfolio]: {
    name: ArticleName.Portfolio,
    image: getImageInfoByName(ImageName.Cat),
    fileName: "intro.md",
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
