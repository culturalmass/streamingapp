import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stringToColor = (str: string) => {
  let hash = 0;
  // Loop through each character of the string
  for (let i = 0; i < str.length; i++) {
    // Add the ASCII value of the character to the hash
    hash = hash + str.charCodeAt(i);
  }
  // Convert the hash to a hexadecimal number
  let hex = hash.toString(16);
  // Pad the hex with zeros if needed
  hex = hex.padStart(6, "0");
  // Return the hex color with a # prefix
  return "#" + hex;
};
