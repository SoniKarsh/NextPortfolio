// This class and the code is the code for Spotlight animation
// Aceternity UI
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Its just a helper function which helps to make everything work with Tailwind
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
