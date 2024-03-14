import React from "react";
import { ImageName, getImageInfoByName } from "@/lib/image";
import Img from "../Img";
import useHoverSkew from "@/components/hooks/useHoverSkew";
import ThumbnailHeader from "./ThumbnailHeader";

interface BigThumbnailProps {
  imageName: ImageName;
}

const BigThumbnail: React.FC<BigThumbnailProps> = ({ imageName }) => {
  const HoverSkew = useHoverSkew();

  const imageInfo = getImageInfoByName(imageName);

  return (
    <div
      {...HoverSkew}
      className="relative cursor-pointer w-full h-[75vh] rounded-lg mb-4 overflow-hidden border box-border border-red-100 hover:shadow-lg hover:shadow-red-400 hover:border-none transition-all duration-75"
    >
      <Img name={imageName} className="h-full w-full relative" />
      <ThumbnailHeader imageInfo={imageInfo} />
    </div>
  );
};

export default BigThumbnail;
