import React from "react";
import Image from "next/image";
import { ImageName, getImageInfoByName } from "@/lib/image";

interface BaseImgProps {
  className?: string;
  quality?: number;
}

interface ImgPropsFromName extends BaseImgProps {
  name: ImageName;
}

interface ImgPropsFromUrl extends BaseImgProps {
  src: string;
  alt: string;
}

type ImgProps = ImgPropsFromName | ImgPropsFromUrl;

function isImgPropsFromName(props: ImgProps): props is ImgPropsFromName {
  return (props as ImgPropsFromName).name !== undefined;
}

function extractImgInfo(props: ImgProps): { url: string; alt: string } {
  if (isImgPropsFromName(props)) {
    return getImageInfoByName(props.name);
  }

  return { url: props.src, alt: props.alt };
}

/**
 * Renders an image component.
 *
 * @component
 * @param {ImgProps} props - The props for the Img component.
 * @returns {JSX.Element} The rendered Img component.
 */
const Img: React.FC<ImgProps> = (props) => {
 const { url, alt } = extractImgInfo(props);

  return (
    <div className={props.className}>
      <Image
        src={url}
        alt={alt}
        quality={props.quality}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Img;
