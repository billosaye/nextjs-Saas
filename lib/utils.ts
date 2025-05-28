import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const subjectColors: Record<string, string> = {
  math: "#FF6B6B",
  science: "#4ECDC4",
  english: "#45B7D1",
  history: "#96CEB4",
  geography: "#FFEEAD",
  default: "#E0E0E0"
}

export function getSubjectColor(subject: string): string {
  return subjectColors[subject.toLowerCase()] || subjectColors.default
}
