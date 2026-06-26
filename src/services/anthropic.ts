export async function callAnthropic(
  apiKey: string,
  model: string,
  prompt: string
) {
  const res =
    await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",

        headers: {
          "x-api-key": apiKey,

          "anthropic-version":
            "2023-06-01",

          "content-type":
            "application/json"
        },

        body: JSON.stringify({
          model,
          max_tokens: 1024,

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
    data.content?.[0]
      ?.text ??
    "No response"
  );
}
