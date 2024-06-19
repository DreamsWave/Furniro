import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(fullname: string, innerPath?: string): string {
  let imagePath = "/images";
  if (innerPath) {
    imagePath += `/${innerPath}`;
  }
  imagePath += `/${fullname}`;
  return imagePath;
}
