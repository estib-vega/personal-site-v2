import { ImageName } from "@/lib/image";
import React from "react";
import SmallThumbnail from "./SmallThumbnail";

interface ThumbnailRowProps {
  imageNames: ImageName[];
}

const ThumbnailRow: React.FC<ThumbnailRowProps> = ({ imageNames }) => {
  return (
    <div className="w-full mb-4 lg:flex rounded-lg">
      {imageNames.map((imageName) => (
        <SmallThumbnail key={imageName} imageName={imageName} />
      ))}
    </div>
  );
};

export default ThumbnailRow;
