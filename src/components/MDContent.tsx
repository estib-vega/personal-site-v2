import { getMarkdownFile } from "@/lib/md";
import React from "react";
import { ImageName } from "@/lib/image";
import MD from "./md/MD";

export enum MDContentTypes {
  String = "string",
  File = "file",
}

interface BaseMDContentProps {
  type: MDContentTypes;
  headerImage?: ImageName;
}

interface MDContentPropsFromString extends BaseMDContentProps {
  type: MDContentTypes.String;
  contentText: string;
}

interface MDContentPropsFromFile extends BaseMDContentProps {
  type: MDContentTypes.File;
  fileName: string;
}

type MDContentProps = MDContentPropsFromString | MDContentPropsFromFile;

/**
 * Retrieves the text content based on the provided props.
 *
 * @param props - The props containing the type and content information.
 * @returns The content as a string.
 */
function getContent(props: MDContentProps): string {
  switch (props.type) {
    case MDContentTypes.String:
      return props.contentText;
    case MDContentTypes.File:
      return getMarkdownFile(props.fileName);
  }
}

/**
 * Renders Markdown content with custom components.
 *
 * @param {MDContentProps} props - The component props.
 * @returns {React.ReactElement} The rendered Markdown content.
 */
const MDContent: React.FC<MDContentProps> = (props) => {
  return <MD content={getContent(props)} headerImage={props.headerImage} />;
};

export default MDContent;
