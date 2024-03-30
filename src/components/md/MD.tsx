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
          <p className="font-normal text-sm lg:text-md mb-2">{children}</p>
        ),
        blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
        ol: ({ children }) => <ol className="list-decimal ml-4">{children}</ol>,
        li: ({ children }) => (
          <li className="font-normal text-sm lg:text-md mb-2">{children}</li>
        ),
        a: ({ children, href }) => (
          <a
            className="italic text-blue-500 hover:underline visited:text-purple-600"
            href={href}
          >
            {children}
          </a>
        ),
        code: ({ children }) => (
          <code className="font-mono text-sm bg-gray-200 p-1 rounded-md">
            {children}
          </code>
        ),
      }}
    >
      {props.content}
    </Markdown>
  );
};

export default MD;
