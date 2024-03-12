import Img from "@/components/generic/Img";
import { ImageName } from "@/lib/image";

export default function Gallery() {
  return (
    <div className="bg-red-200 w-full p-4 pb-10">
      <div className="w-full h-[75vh] rounded-lg mb-4 overflow-hidden border box-border border-red-100">
        <Img name={ImageName.Cat} className="h-full w-full relative" />
      </div>
      <div className="w-full mb-4 lg:flex rounded-lg">
        <div className="w-full h-96 rounded-lg mb-4 lg:mr-4 overflow-hidden border box-border border-red-100">
          <Img name={ImageName.Choque} className="h-full w-full relative" />
        </div>
        <div className="w-full h-96 rounded-lg mb-4 lg:mr-4 overflow-hidden border box-border border-red-100">
          <Img name={ImageName.Lagartija} className="h-full w-full relative" />
        </div>
        <div className="w-full h-96 rounded-lg mb-4 overflow-hidden border box-border border-red-100">
          <Img name={ImageName.Craneo} className="h-full w-full relative" />
        </div>
      </div>
    </div>
  );
}
