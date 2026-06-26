import {
  routePrompt
} from "../services/orchestrator";

chrome.runtime.onInstalled.addListener(
  () => {
    console.log(
      "Multi LLM installed"
    );
  }
);

chrome.runtime.onMessage.addListener(
  (
    message,
    sender,
    sendResponse
  ) => {
    if (
      message.action ===
      "ask"
    ) {
      routePrompt(
        message.prompt
      )
        .then(
          (responses) =>
            sendResponse({
              ok: true,
              responses
            })
        )
        .catch(
          (error) =>
            sendResponse({
              ok: false,
              error:
                error.message
            })
        );

      return true;
    }
  }
);
