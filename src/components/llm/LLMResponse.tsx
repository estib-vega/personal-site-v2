import React from "react";
import Author from "./Author";
import LLMHandler from "@/lib/llm";
import { AuthorType } from "@/lib/conversation";
import MD from "../md/MD";

interface LLMResponseProps {
  prompt: string;
}

const LLMResponse: React.FC<LLMResponseProps> = (props) => {
  const llmHandler = React.useMemo(() => LLMHandler.getInstance(), []);
  const [response, setResponse] = React.useState<string | null>(null);

  const generateStream = React.useCallback(
    (prompt: string) => {
      llmHandler.generateStream(
        prompt,
        (value) => {
          setResponse((prev) => (prev ? prev + value : value));
        },
        console.log
      );
    },
    [llmHandler]
  );

  React.useEffect(() => {
    generateStream(props.prompt);
  }, [generateStream, props.prompt]);

  const regenerate = () => {
    setResponse(null);
    generateStream(props.prompt);
  };

  return (
    <div className="flex flex-wrap">
      <div className="bg-red-300 mr-4 rounded p-2 text-red-700 flex space-x-2">
        <Author author={AuthorType.Bot} />
        <div>
          <MD smallHeader content={response ?? "# 🤔"} noUserBadge />
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={regenerate}
          className="font-bold text-red-400 h-auto rounded p-1 cursor-pointer"
        >
          try again
        </button>
      </div>
    </div>
  );
};

export default LLMResponse;
