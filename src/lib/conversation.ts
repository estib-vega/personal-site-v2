import { UUID } from "./utils/uuid";

export enum AuthorType {
  User = "user",
  Bot = "bot",
}

export interface Message {
  author: AuthorType;
  content: string;
  uuid: UUID;
}

export type Conversation = Message[];

/**
 * Returns the emoji representation of the author.
 *
 * @param author - The type of the author.
 * @returns The emoji corresponding to the author type.
 */
export function getAuthorEmoji(author: AuthorType): string {
  switch (author) {
    case AuthorType.User:
      return "👤";
    case AuthorType.Bot:
      return "🤖";
  }
}