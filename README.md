# 🤖 AI Chat — Terminal-Based AI Chatbot

A terminal-based AI chatbot that communicates with both Groq and Gemini models, with automatic fallback if one model fails.

---

## ⚙️ Setup

### 1. Clone the repository
git clone https://github.com/yourusername/ai-chat.git
cd ai-chat

### 2. Install dependencies
npm install

### 3. Create `.env` file
GROQ_API_KEY=your_groq_key_here
GEMINI_API_KEY=your_gemini_key_here

### 4. Run the app
node index.js

---

## 💬 Commands

| Command   | Description              |
|-----------|--------------------------|
| /groq     | Switch to Groq model     |
| /gemini   | Switch to Gemini model   |
| /help     | Show available commands  |
| /clear    | Clear the terminal       |
| /exit     | Exit the chat            |

---

## 📁 Project Structure

project/
├── services/
│   ├── groq.js       # Groq API integration
│   └── gemini.js     # Gemini API integration
├── utils/
│   └── fallback.js   # Automatic fallback logic
├── index.js          # Main entry point
├── .env              # API keys (not pushed to GitHub)
├── .gitignore
└── README.md

---

## 🔄 How Fallback Works

1. User sends a message
2. Primary model is called
3. If it fails → prints "Primary Model Failed. Switching to..."
4. Secondary model is called automatically
5. If both fail → friendly error message is shown

---

## 🤖 Models Used

- Groq: `llama-3.3-70b-versatile`
- Gemini: `gemini-2.5-flash`

---

## 🛠️ Built With

- Node.js
- groq-sdk
- @google/generative-ai
- dotenv
- readline