chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(
    "startTimerNotification",
    ({ startTimerNotification }) => {
      if (startTimerNotification) {
        setInterval(() => {
          chrome.notifications.create({
            title: "Reminder",
            message: "Test reminder",
            iconUrl: "./relaxIcon.png",
            type: "basic",
          });
        }, 3000);
      }
    }
  );
});
