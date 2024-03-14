"use client"

import BigThumbnail from "@/components/generic/thumbnail/BigThumbnail";
import ThumbnailRow from "@/components/generic/thumbnail/ThumbnailRow";
import { ImageName } from "@/lib/image";

export default function Gallery() {
  return (
    <div className="bg-red-200 w-full p-4 pb-10">
      <BigThumbnail imageName={ImageName.Cat} />
      <ThumbnailRow
        imageNames={[ImageName.Choque, ImageName.Lagartija, ImageName.Craneo]}
      />
      <ThumbnailRow
        imageNames={[ImageName.Craneo2, ImageName.Dragon]}
      />
    </div>
  );
}
