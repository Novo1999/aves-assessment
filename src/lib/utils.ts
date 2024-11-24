import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const showCurrentDate = () => {
  const date = new Date();
  const options: Record<string, string> = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

