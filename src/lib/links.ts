import { ImageName } from "./image";

/**
 * Returns the link for a gallery image based on the provided image name.
 *
 * @param imageName - The name of the image.
 * @returns The link for the gallery image.
 */
export function getGalleryImageLink(imageName: ImageName): string {
  return `/gallery/${imageName}`;
}
