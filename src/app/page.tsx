import MainContent from "@/components/MainContent";
import MainNavigation from "@/components/MainNavigation";
import { ArticleName } from "@/lib/article";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <div className="gradient fixed top-0 left-0 w-screen h-screen box-border flex-col-reverse sm:flex-row flex">
        <MainNavigation />
        <MainContent article={ArticleName.Portfolio} />
      </div>
    </main>
  );
}
