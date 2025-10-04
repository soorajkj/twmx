import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function twmx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export * from "tailwind-merge";
export * from "clsx";
