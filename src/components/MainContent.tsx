import React from "react";
import MDContent, { MDContentTypes } from "./MDContent";
import { ArticleName, getArticleInfoByName } from "@/lib/article";

interface MainContentProps {
  article: ArticleName;
}

const MainContent = (props: MainContentProps): JSX.Element => {
  const articleInfo = getArticleInfoByName(props.article);

  return (
    <div className="bg-white box-border rounded-xl m-2 p-4 overflow-scroll text-gray-800 shadow-md shadow-blue-600 sm:w-full">
      <MDContent headerImage={articleInfo.image} type={MDContentTypes.File} fileName="intro.md" />
    </div>
  );
}

export default MainContent;