let start = false;
let time = 0;

chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(
    ["startTimerNotification", "time"],
    ({ startTimerNotification, time }) => {
      if (startTimerNotification) {
        start = true;
        time = time
      }
    }
  );
});

chrome.runtime.onInstalled.addListener(() => {
  setInterval(() => {
    if (start) {
      setInterval(() => {
        chrome.notifications.create({
          title: "Reminder",
          message: "Test reminder",
          iconUrl: "./relaxIcon.png",
          type: "basic",
        });
      }, time);
  }}, 1000);
});
