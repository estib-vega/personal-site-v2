export enum ImageName {
  Cat = "cat",
  Choque = "choque",
  Craneo = "craneo",
  Lagartija = "lagartija",
  Craneo2 = "craneo-2",
  Dragon = "dragon",
}

export interface ImageInfo {
  name: string;
  url: string;
  alt: string;
  useDarkFont?: boolean;
  displayName?: string;
}

const images: Record<ImageName, ImageInfo> = {
  [ImageName.Cat]: {
    name: ImageName.Cat,
    url: "/img/cat.jpg",
    alt: "gato",
    displayName: "gato"
  },
  [ImageName.Choque]: {
    name: ImageName.Choque,
    url: "/img/choque.jpg",
    alt: "choque",
    useDarkFont: true,
    displayName: "choque"
  },
  [ImageName.Craneo]: {
    name: ImageName.Craneo,
    url: "/img/craneo.jpeg",
    alt: "craneo con tela",
    displayName: "craneo con tela"
  },
  [ImageName.Lagartija]: {
    name: ImageName.Lagartija,
    url: "/img/lagartija.jpeg",
    alt: "Lagartija",
  },
  [ImageName.Craneo2]: {
    name: ImageName.Craneo2,
    url: "/img/craneo-2.jpg",
    alt: "Craneo 2",
    useDarkFont: true,
  },
  [ImageName.Dragon]: {
    name: ImageName.Dragon,
    url: "/img/dragon.jpg",
    alt: "Dragon",
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