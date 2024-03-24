import { Message } from "@/lib/conversation";
import React from "react";
import LLMResponse from "./LLMResponse";
import MessageEntry from "./MessageEntry";

interface MessageExchangeProps {
  message: Message;
}

const MessageExchange: React.FC<MessageExchangeProps> = (props) => {
  return (
    <>
      <MessageEntry message={props.message} />
      <LLMResponse prompt={props.message.content} />
    </>
  );
};

export default MessageExchange;
