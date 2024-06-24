import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getData } from "country-list";

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

export function getDiscountedPrice(price: number, discount: number): number {
  return price - (price * discount) / 100;
}

export function toCamelCase(str: string) {
  return str
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}

export function toSpaceSeparated(str: string) {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();
}

export function getCountriesForSelect() {
  return getData().map((c) => ({
    value: c.code,
    label: c.name,
  }));
}
