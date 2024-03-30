import React from "react";
import { ImageName, getImageInfoByName } from "@/lib/image";
import Img from "../Img";
import useHoverSkew from "@/components/hooks/useHoverSkew";
import ThumbnailHeader from "./ThumbnailHeader";
import Link from "next/link";
import { getGalleryImageLink } from "@/lib/links";

interface SmallThumbnailProps {
  imageName: ImageName;
}

const SmallThumbnail: React.FC<SmallThumbnailProps> = ({ imageName }) => {
  const HoverSkew = useHoverSkew({
    degree: 2,
  });

  const imageInfo = getImageInfoByName(imageName);

  return (
    <div
      {...HoverSkew}
      className="relative cursor-pointer w-full h-96 rounded-lg mb-4 lg:mr-4 lg:last:mr-0 overflow-hidden border box-border border-red-100 hover:shadow-lg hover:shadow-red-400 hover:border-none transition-all duration-75 animate-fade-in-3"
    >
      <Link href={getGalleryImageLink(imageName)}>
        <div className="w-full h-full">
          <Img name={imageName} className="h-full w-full relative" />
          <ThumbnailHeader imageInfo={imageInfo} />
        </div>
      </Link>
    </div>
  );
};

export default SmallThumbnail;
