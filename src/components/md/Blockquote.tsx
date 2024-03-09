import React from "react";

interface BlockquoteProps {
  children: React.ReactNode;
}

const Blockquote: React.FC<BlockquoteProps> = (props) => {
  return (
    <blockquote className="font-normal text-md lg:text-lg italic mb-4">
      {props.children}
    </blockquote>
  );
};

export default Blockquote;
