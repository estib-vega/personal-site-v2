import MainNavigation from "@/components/MainNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <div className="gradient fixed top-0 left-0 w-screen h-screen box-border flex">
        <MainNavigation />
        <div className="bg-white w-full box-border rounded-xl m-2 p-4 overflow-scroll text-gray-800">
          <Image src="/cat.jpg" alt="Cat" width={300} height={300} />
          <h1 className="font-header text-8xl lg:text-12xl">this is some sample title</h1>
        </div>
      </div>
    </main>
  );
}
