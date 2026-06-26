export type ProviderName =
  | "openai"
  | "anthropic"
  | "gemini";

export interface LLMRequest {
  provider: ProviderName;
  prompt: string;
}

export interface LLMResponse {
  provider: ProviderName;
  text: string;
  latency: number;
}

export interface ProviderConfig {
  apiKey: string;
  model: string;
}

export interface StoredSettings {
  openai?: ProviderConfig;
  anthropic?: ProviderConfig;
  gemini?: ProviderConfig;
}

