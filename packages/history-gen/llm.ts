import OpenAI from "openai";

const model = "preview/Qwen3-0.6B-cpu";

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY")!,
});


export async function generateMarkdown(systemPrompt: string, userPrompt: string) {
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      { role: "system", content: systemPrompt }, // System message setting the role
      { role: "user", content: userPrompt }, // User's input prompt
    ],
  });
  return completion.choices[0].message.content;
}
