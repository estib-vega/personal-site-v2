import { Message } from "@/lib/conversation";
import React from "react";
import LLMResponse from "./LLMResponse";
import MessageEntry from "./MessageEntry";

interface MessageExchangeProps {
  message: Message;
  context: number[] | undefined;
  onDone: (value: string, context: number[]) => void;
}

const MessageExchange: React.FC<MessageExchangeProps> = (props) => {
  return (
    <>
      <MessageEntry message={props.message} />
      <LLMResponse prompt={props.message.content} context={props.context} onDone={props.onDone} />
    </>
  );
};

export default MessageExchange;
