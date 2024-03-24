import { Conversation, AuthorType } from "@/lib/conversation";
import { uuid } from "@/lib/utils/uuid";
import React from "react";
import MessageExchange from "./MessageExchange";

const LLMConversation: React.FC = () => {
  const [conversation, setConversation] = React.useState<Conversation>([]);

  const addUserMessage = (content: string) => {
    setConversation((prev) => [
      ...prev,
      { author: AuthorType.User, content, uuid: uuid() },
    ]);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full overflow-scroll p-4">
        <div className="space-y-2">
          {conversation.map((message) => (
            <MessageExchange key={message.uuid} message={message} />
          ))}
        </div>
      </div>
      <div className="w-full bottom-0 flex flex-col justify-end p-4">
        <input
          className="rounded border border-red-400 w-full bg-red-100 p-2 outline-none"
          autoFocus
          type="text"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addUserMessage(event.currentTarget.value);
              event.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default LLMConversation;
