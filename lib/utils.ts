/**
 * Utility functions for class name merging and generating absolute URLs.
 * Includes a helper for combining Tailwind CSS classes and a function to construct absolute URLs.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const absoluteUrl = (path: string) => {
  return `http://localhost:3000/${path}`;
};
