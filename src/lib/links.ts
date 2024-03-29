import { ImageName } from "./image";

const SEPARATOR = "/";

export enum Route {
  Home = "/",
  About = "/about",
  Projects = "/projects",
  Contact = "/contact",
  Gallery = "/gallery",
}

export interface RouteInfo {
  name: string;
  path: Route;
  hide?: boolean;
}

export const routes: RouteInfo[] = [
  { name: "home", path: Route.Home },
  { name: "about", path: Route.About},
  { name: "projects", path: Route.Projects, hide: true},
  { name: "contact", path: Route.Contact, hide: true},
  { name: "gallery", path: Route.Gallery },
];

/**
 * Joins multiple path parts into a single path string.
 *
 * @param parts - The path parts to join.
 * @returns The joined path string.
 */
export function joinPath(...parts: string[]): string {
  return parts.join(SEPARATOR);
}

/**
 * Returns the link for a gallery image based on the provided image name.
 *
 * @param imageName - The name of the image.
 * @returns The link for the gallery image.
 */
export function getGalleryImageLink(imageName: ImageName): string {
  return joinPath(Route.Gallery, imageName);
}
