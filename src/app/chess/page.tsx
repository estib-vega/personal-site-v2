import Article from "@/components/Article";
import { ArticleName } from "@/lib/article";

export default function Chess() {
  return (
    <div className="p-4">
      <Article article={ArticleName.ChessProject} />
    </div>
  );
}
