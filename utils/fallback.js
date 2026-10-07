import { askGroq } from "../services/groq.js";
import { askGemini } from "../services/gemini.js";

export async function askWithFallback(prompt, primaryModel) {
    const primary = primaryModel === "groq" ? askGroq : askGemini;
    const fallback = primaryModel === "groq" ? askGemini : askGroq;
    const fallbackName = primaryModel === "groq" ? "Gemini" : "Groq";

    primaryModel === "groq" ? askGroq : askGemini

    try {
        const response = await primary(prompt);
        return response;
    } catch (error) {
        console.log("\n Primary Model Failed.");
        console.log(` Switching to ${fallbackName}...`);
    }

    try {
      const response = await fallback(prompt);
      console.log(" Response Generated Successfully.\n");
      return response;
    } catch (error) {
      return " Both models failed. Please check your API keys or internet connection.";
    }
}