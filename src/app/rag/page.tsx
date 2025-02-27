import Article from "@/components/Article";
import { ArticleName } from "@/lib/article-v2";

export default function RAG() {
  return (
    <div className="p-4">
      <Article article={ArticleName.RagProject} />
    </div>
  );
}
