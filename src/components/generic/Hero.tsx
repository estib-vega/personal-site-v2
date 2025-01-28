import React from "react";
import Img from "./Img";
import { ImageName, getImageInfoByName } from "@/lib/image";
import ThumbnailHeader from "./thumbnail/ThumbnailHeader";

// :) v2

type HeroProps = {
  title: string;
  subtitle: string;
  imageName: ImageName;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageName }) => {
  const imageInfo = getImageInfoByName(imageName);
  return (
    <div className="w-full relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg animate-fade-in mb-8">
      <Img name={imageName} className="h-full w-full relative animate-fade-in-2" />
      <ThumbnailHeader
        title={title}
        subtitle={subtitle}
        useDarkFont={imageInfo.useDarkFont}
        center
        underline
      />
    </div>
  );
};

export default Hero;
