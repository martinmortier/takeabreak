chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(
    ["startTimerNotification","time"],
    ({ startTimerNotification, time }) => {
      if (startTimerNotification) {
        setInterval(() => {
          chrome.notifications.create({
            title: "Reminder",
            message: "Test reminder",
            iconUrl: "./relaxIcon.png",
            type: "basic",
          });
        }, time);
      }
    }
  );
});