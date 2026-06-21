import Groq from "groq-sdk";

export async function askGroq(prompt) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }); // moved inside
  
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}