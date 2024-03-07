import { Playfair_Display, Jost } from "next/font/google";

export const headerFont = Playfair_Display({
  subsets: ["latin"],
  weight: "800",
  variable: "--header-font",
  style: ["italic", "normal"],
});

export const bodyFont = Jost({
  subsets: ["latin"],
  weight: "400",
  variable: "--body-font",
});

/**
 * Retrieves the font variables.
 *
 * @returns A string containing the header and body font variables.
 */
export default function getFontVars(): string {
  return `${headerFont.variable} ${bodyFont.variable}`
}