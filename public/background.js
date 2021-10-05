let interval;
chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(
    ["startTimerNotification", "time"],
    ({ startTimerNotification, time }) => {
      clearInterval(interval);
      if (startTimerNotification && time > 0) {
        interval = setInterval(() => {
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

//TODO: Save startTimerNotification and time value in App.tsx
