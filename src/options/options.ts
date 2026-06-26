import {
saveSettings,
loadSettings
}
from "../services/storage";

async function init(){

const cfg =
await loadSettings();

(
document.getElementById(
"openaiKey"
) as HTMLInputElement
).value =
cfg.openai?.apiKey ||
"";

(
document.getElementById(
"openaiModel"
) as HTMLInputElement
).value =
cfg.openai?.model ||
"";

(
document.getElementById(
"anthropicKey"
) as HTMLInputElement
).value =
cfg.anthropic?.apiKey ||
"";

(
document.getElementById(
"anthropicModel"
) as HTMLInputElement
).value =
cfg.anthropic?.model ||
"";

(
document.getElementById(
"geminiKey"
) as HTMLInputElement
).value =
cfg.gemini?.apiKey ||
"";

(
document.getElementById(
"geminiModel"
) as HTMLInputElement
).value =
cfg.gemini?.model ||
"";

}

document
.getElementById(
"save"
)!
.addEventListener(
"click",
async ()=>{

await saveSettings({

openai:{
apiKey:
(
document.getElementById(
"openaiKey"
)
as HTMLInputElement
).value,

model:
(
document.getElementById(
"openaiModel"
)
as HTMLInputElement
).value
},

anthropic:{
apiKey:
(
document.getElementById(
"anthropicKey"
)
as HTMLInputElement
).value,

model:
(
document.getElementById(
"anthropicModel"
)
as HTMLInputElement
).value
},

gemini:{
apiKey:
(
document.getElementById(
"geminiKey"
)
as HTMLInputElement
).value,

model:
(
document.getElementById(
"geminiModel"
)
as HTMLInputElement
).value
}

});

alert(
"Saved"
);

}
);

init();
