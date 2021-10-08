let interval;
chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(
    ["startTimerNotification", "time"],
    ({ startTimerNotification, time }) => {
      clearInterval(interval);
      if (startTimerNotification && time > 0) {
        interval = setInterval(() => {
          chrome.notifications.create({
            title: "It's time to take a beak !",
            message: "Don't forget to drink some water and sit on your chair properly 😄",
            iconUrl: "./relaxIcon.png",
            type: "basic",
          });
        }, time);
      }
    }
  );
});
