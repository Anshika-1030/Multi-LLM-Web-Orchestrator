import {
  getPageText
} from "./content-helpers";

chrome.runtime.onMessage.addListener(
  (
    message,
    sender,
    sendResponse
  ) => {
    if (
      message.action ===
      "capture"
    ) {
      sendResponse({
        text:
          getPageText()
      });
    }
  }
);
