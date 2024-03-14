import React from "react";
import { ImageInfo } from "@/lib/image";

/**
 * Returns the CSS class name for the header element based on the provided image information.
 *
 * @param imageInfo - The image information object.
 * @returns The CSS class name for the header element.
 */
function getHeaderClassName(imageInfo: ImageInfo): string {
  const classNameBuffer = ["font-body text-6xl"];
  classNameBuffer.push(imageInfo.useDarkFont ? "text-red-400" : "text-red-50");
  return classNameBuffer.join(" ");
}

interface ThumbnailHeaderProps {
  imageInfo: ImageInfo;
}

const ThumbnailHeader: React.FC<ThumbnailHeaderProps> = (props) => {
  return (
    <div className="w-full h-full relative bottom-full p-4 flex flex-col justify-end">
      <h1 className={getHeaderClassName(props.imageInfo)}>
        {props.imageInfo.displayName ?? props.imageInfo.name}
      </h1>
    </div>
  );
};

export default ThumbnailHeader;
