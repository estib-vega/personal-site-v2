import React from "react";
import { Message as MessageEntry } from "@/lib/conversation";
import Author from "./Author";

interface MessageEntryProps {
  message: MessageEntry;
}

const MessageEntry: React.FC<MessageEntryProps> = (props) => {
  return (
    <div className="flex justify-end">
      <div className="bg-red-200 rounded p-2 text-red-800 flex space-x-2">
        <div>{props.message.content}</div>
        <Author author={props.message.author} />
      </div>
    </div>
  );
};

export default MessageEntry;
