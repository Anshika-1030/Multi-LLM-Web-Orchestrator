import { StoredSettings } from "../types/llm";

const SETTINGS_KEY = "multi_llm_settings";

export async function saveSettings(
  settings: StoredSettings
): Promise<void> {
  await chrome.storage.local.set({
    [SETTINGS_KEY]: settings
  });
}

export async function loadSettings(): Promise<StoredSettings> {
  const result =
    await chrome.storage.local.get(
      SETTINGS_KEY
    );

  return result[SETTINGS_KEY] || {};
}

export async function clearSettings() {
  await chrome.storage.local.remove(
    SETTINGS_KEY
  );
}

