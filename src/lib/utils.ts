import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomColor() {
  const colorValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      const rand = Math.floor(Math.random() * colorValues.length);
      hexCode += colorValues[rand];
    }
    return hexCode;
}


export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}