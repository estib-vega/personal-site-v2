import MainNavigation from "@/components/MainNavigation";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <div className=" gradient fixed top-0 left-0 w-screen h-screen box-border">
        <MainNavigation />
      </div>
    </main>
  );
}
