import React from "react";
import Img from "./Img";
import { ImageName, getImageInfoByName } from "@/lib/image";
import ThumbnailHeader from "./thumbnail/ThumbnailHeader";

type HeroProps = {
  title: string;
  subtitle: string;
  imageName: ImageName;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageName }) => {
  const imageInfo = getImageInfoByName(imageName);
  return (
    <div className="w-full h-[75dvh] border relative rounded-lg overflow-hidden">
      <Img name={imageName} className="h-full w-full relative" />
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
