import React from "react";
import Markdown from "react-markdown";
import Header from "./Header";
import { ImageName } from "@/lib/image";
import Blockquote from "./Blockquote";

interface MDProps {
  content: string;
  smallHeader?: boolean;
  headerImage?: ImageName;
  noUserBadge?: boolean;
}

const MD: React.FC<MDProps> = (props) => {
  return (
    <Markdown
    components={{
      h1: ({ children }) => (
        <Header
          small={props.smallHeader}
          noUserBadge={props.noUserBadge}
          headerImage={props.headerImage}
        >
          {children}
        </Header>
      ),
      h2: ({ children }) => (
        <h2 className="font-bold text-1xl mb-2">{children}</h2>
      ),
      p: ({ children }) => (
        <p className="font-normal text-md lg:text-lg mb-4">{children}</p>
      ),
      blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    }}
  >
    {props.content}
  </Markdown>
  );
}

export default MD;
