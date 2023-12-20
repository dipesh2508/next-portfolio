// Import the Whisper font from the next/font/google module
import { Whisper } from "next/font/google";

// Define the whisper font style
export const whisper = Whisper({
  weight: "400", // Set the font weight to 400 (normal)
  subsets: ["latin"], // Use the Latin subset of the font
});
