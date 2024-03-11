export enum ImageName {
  Cat = "cat",
}

export interface ImageInfo {
  name: string;
  url: string;
  alt: string;
}

const images: Record<ImageName, ImageInfo> = {
  [ImageName.Cat]: {
    name: ImageName.Cat,
    url: "/img/cat.jpg",
    alt: "Cat",
  },
};

/**
 * Retrieves the image information by name.
 *
 * @param name - The name of the image.
 * @returns The image information if found, otherwise undefined.
 */
export function getImageInfoByName(name: ImageName): ImageInfo {
  return images[name];
}