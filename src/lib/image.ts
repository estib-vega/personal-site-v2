export enum ImageName {
  Cat = "cat",
  Choque = "choque",
  Craneo = "craneo",
  Lagartija = "lagartija",
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
  [ImageName.Choque]: {
    name: ImageName.Choque,
    url: "/img/choque.jpg",
    alt: "Choque",
  },
  [ImageName.Craneo]: {
    name: ImageName.Craneo,
    url: "/img/craneo.jpeg",
    alt: "Craneo",
  },
  [ImageName.Lagartija]: {
    name: ImageName.Lagartija,
    url: "/img/lagartija.jpeg",
    alt: "Lagartija",
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