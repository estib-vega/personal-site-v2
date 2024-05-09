export enum ImageName {
  Cat = "cat",
  Choque = "choque",
  Craneo = "craneo",
  Lagartija = "lagartija",
  Craneo2 = "craneo-2",
  Dragon = "dragon",
  ChessGif = "chess-gif",
  RagGif = "rag-gif",
}

export interface ImageInfo {
  name: string;
  url: string;
  alt: string;
  useDarkFont?: boolean;
  displayName?: string;
  blurDataUrl?: string;
  contain?: boolean;
}

const images: Record<ImageName, ImageInfo> = {
  [ImageName.Cat]: {
    name: ImageName.Cat,
    url: "/img/cat.jpg",
    alt: "gato",
    displayName: "gato",
    blurDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4cet5Tsni9rYtDJXO+aYMGglhXQz1DGpHGWTvtc5k2G0TcMDE//+7FwBdyxGIKut62QAAAABJRU5ErkJggg==",
  },
  [ImageName.Choque]: {
    name: ImageName.Choque,
    url: "/img/choque.jpg",
    alt: "choque",
    useDarkFont: true,
    displayName: "choque",
    blurDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAFxGAABcRgEUlENBAAAAMUlEQVR4nAXBsQkAAAgDsIJ3Oftgb3B06SS+4TuCCbo7M+8OJN2dJCSZWURgd6tqZh6w3xTyyRQeJQAAAABJRU5ErkJggg==",
  },
  [ImageName.Craneo]: {
    name: ImageName.Craneo,
    url: "/img/craneo.jpeg",
    alt: "craneo con tela",
    displayName: "craneo con tela",
    blurDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4/fvz0sVzfnz/xFBUlMHFzjBlci+Dm5O1mqp8aXE+g6aagoW5gZWlCQCEzA75wtHqgAAAAABJRU5ErkJggg==",
  },
  [ImageName.Lagartija]: {
    name: ImageName.Lagartija,
    url: "/img/lagartija.jpeg",
    alt: "Lagartija",
    blurDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGO4f2p9W078/98PGa7sXhxma9xbnsEQ72mtJyl0ZNU0himVKZIMDAs6SgCROxFPBhvzbgAAAABJRU5ErkJggg==",
  },
  [ImageName.Craneo2]: {
    name: ImageName.Craneo2,
    url: "/img/craneo-2.jpg",
    alt: "Craneo 2",
    useDarkFont: true,
    blurDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AP/8/rSgsLeIi9fRywCdkKAsABNCABJfUlsAw7m3Qi5DXDRCo5KOmu4SIti+2coAAAAASUVORK5CYII=",
  },
  [ImageName.Dragon]: {
    name: ImageName.Dragon,
    url: "/img/dragon.jpg",
    alt: "Dragon",
    blurDataUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPYM3tWaHCBu5UHQ0d6kQGD4MSULIb08Kwppk6zvAMZ8iomTapq+P/hNQAhrRAbG5wYvAAAAABJRU5ErkJggg==",
  },
  [ImageName.ChessGif]: {
    name: ImageName.ChessGif,
    url: "/img/chess.gif",
    alt: "Dumb Chess gif",
    contain: true,
  },
  [ImageName.RagGif]: {
    name: ImageName.RagGif,
    url: "/img/rag.gif",
    alt: "Rag gif",
    contain: true,
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
