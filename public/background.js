chrome.runtime.onInstalled.addListener(() => {
   setInterval(() => {
    chrome.notifications.create({
        title: 'Reminder',
        message:'Test reminder',
        iconUrl:'./relaxIcon.png',
        type:'basic'
      })
   },3000)
  });