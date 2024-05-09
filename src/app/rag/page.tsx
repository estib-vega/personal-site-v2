import Article from "@/components/Article";
import { ArticleName } from "@/lib/article";

export default function RAG() {
  return (
    <div className="p-4">
      <Article article={ArticleName.RagProject} />
    </div>
  );
}
