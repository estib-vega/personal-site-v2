import Img from "@/components/generic/Img";
import { ImageName } from "@/lib/image";
import { isEnumEntry } from "@/lib/utils/typing";

interface ImagePageProps {
  params: { img: string };
}

export default function ImagePage(props: ImagePageProps) {
  if (isEnumEntry(props.params.img, ImageName)) {
    props.params.img;
    return (
      <div className="bg-red-200 w-full h-full">
          <Img name={props.params.img} className="h-full w-full relative" contain />
      </div>
    );
  }

  return (
    <div className="bg-red-200 w-full h-full flex justify-center items-center">
      <p className="text-red-800 text-4xl"><span className="italic">Did not find that image </span>🤷🏻‍♂️</p>
    </div>
  )
}
