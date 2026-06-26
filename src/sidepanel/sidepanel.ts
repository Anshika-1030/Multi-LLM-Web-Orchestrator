type Result =
  | string
  | {
      provider?: string;
      text?: string;
    };

const prompt =
document.getElementById(
"prompt"
) as HTMLTextAreaElement;

const button =
document.getElementById(
"send"
) as HTMLButtonElement;

const results =
document.getElementById(
"results"
)!;

button.addEventListener(
"click",
async () => {

results.innerHTML =
"<p>Running...</p>";

const response =
await chrome.runtime.sendMessage({
action: "ask",
prompt: prompt.value
});

if (!response.ok) {
results.innerHTML =
`<p>${response.error}</p>`;
return;
}

results.innerHTML = "";

response.responses.forEach(
(
item: Result,
index: number
) => {

const div =
document.createElement(
"div"
);

div.className =
"card";

const text =
typeof item === "string"
? item
: item.text;

div.innerHTML =
`
<h3>Response ${
index + 1
}</h3>

<pre>${text}</pre>
`;

results.appendChild(
div
);

}
);

}
);
