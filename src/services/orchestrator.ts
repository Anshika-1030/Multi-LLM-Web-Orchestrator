import {
  callOpenAI
} from "./openai";

import {
  callAnthropic
} from "./anthropic";

import {
  callGemini
} from "./gemini";

import {
  loadSettings
} from "./storage";

export async function routePrompt(
  prompt: string
) {
  const cfg =
    await loadSettings();

  const tasks = [];

  if (cfg.openai) {
    tasks.push(
      callOpenAI(
        cfg.openai.apiKey,
        cfg.openai.model,
        prompt
      )
    );
  }

  if (cfg.anthropic) {
    tasks.push(
      callAnthropic(
        cfg.anthropic.apiKey,
        cfg.anthropic.model,
        prompt
      )
    );
  }

  if (cfg.gemini) {
    tasks.push(
      callGemini(
        cfg.gemini.apiKey,
        cfg.gemini.model,
        prompt
      )
    );
  }

  return Promise.all(tasks);
}
