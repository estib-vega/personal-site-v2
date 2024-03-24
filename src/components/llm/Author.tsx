import { AuthorType, getAuthorEmoji } from "@/lib/conversation";
import React from "react";

interface AuthorProps {
  author: AuthorType;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  return <div>{getAuthorEmoji(author)}</div>;
};

export default Author;
