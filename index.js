import readline from "readline";
import dotenv from "dotenv";
import { askWithFallback } from "./utils/fallback.js";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentModel = "groq";

console.log("🤖 AI Chat Started!");
console.log("Commands: /groq | /gemini | /exit | /help | /clear");
console.log(`Current Model: ${currentModel.toUpperCase()}\n`);

function chat() {
  rl.question("You: ", async (input) => {
    const trimmed = input.trim();
    if (!trimmed) {
      console.log("Please enter a message.\n");
      return chat();
    }

    if (trimmed === "/groq") {
      currentModel = "groq";
      console.log("Using Groq Model\n");
      return chat();
    }

    if (trimmed === "/gemini") {
      currentModel = "gemini";
      console.log("Using Gemini Model\n");
      return chat();
    }

    if (trimmed === "/help") {
      console.log("\nCommands:");
      console.log("  /groq   - Switch to Groq model");
      console.log("  /gemini - Switch to Gemini model");
      console.log("  /clear  - Clear terminal");
      console.log("  /exit   - Exit the chat\n");
      return chat();
    }

    if (trimmed === "/clear") {
      console.clear();
      return chat();
    }

    const response = await askWithFallback(trimmed, currentModel);
    console.log(`\nAI: ${response}\n`);
    chat();
  });
}

chat();