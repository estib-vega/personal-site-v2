import MDContent, { MDContentTypes } from "@/components/MDContent";
import MainNavigation from "@/components/MainNavigation";
import Image from "next/image";


const MainContent = async (): Promise<JSX.Element> => {
  return (
    <div className="bg-white w-full box-border rounded-xl m-2 p-4 overflow-scroll text-gray-800 shadow-md shadow-blue-600">
      <Image src="/cat.jpg" alt="Cat" width={300} height={300} />
      <MDContent type={MDContentTypes.File} fileName="intro.md" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <div className="gradient fixed top-0 left-0 w-screen h-screen box-border flex">
        <MainNavigation />
        <MainContent />
      </div>
    </main>
  );
}
