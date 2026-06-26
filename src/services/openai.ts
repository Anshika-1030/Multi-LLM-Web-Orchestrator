export async function callOpenAI(
  apiKey: string,
  model: string,
  prompt: string
) {
  const res =
    await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${apiKey}`,
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          model,

          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

  const data =
    await res.json();

  return (
    data.choices?.[0]
      ?.message?.content ??
    "No response"
  );
}
