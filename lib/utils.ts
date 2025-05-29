import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const subjectColors: Record<string, string> = {
  algorithms: "#E5D0FF",
  "data-structures": "#FFDA6E",
  "web-development": "#BDE7FF",
  databases: "#FFC8E4",
  "operating-systems": "#FFECC8",
  networking: "#C8FFDF",
  "software-engineering": "#FFB6C1",
  "artificial-intelligence": "#98FB98",
  cybersecurity: "#FFA07A",
  "computer-architecture": "#87CEEB",
  default: "#E0E0E0"
}

export function getSubjectColor(subject: string): string {
  return subjectColors[subject.toLowerCase()] || subjectColors.default
}
