import { ArticleName, getArticleInfoByName } from "@/lib/article";
import React from "react";
import MDContent, { MDContentTypes } from "./MDContent";

interface ArticleProps {
  article: ArticleName;
}

/**
 * Renders an article component.
 *
 * @param {ArticleProps} props - The props for the Article component.
 * @returns {React.ReactElement} The rendered Article component.
 */
const Article: React.FC<ArticleProps> = (props) => {
  const articleInfo = getArticleInfoByName(props.article);
  return (
    <MDContent
      headerImage={articleInfo.image}
      type={MDContentTypes.File}
      fileName={articleInfo.fileName}
    />
  );
};

export default Article;
