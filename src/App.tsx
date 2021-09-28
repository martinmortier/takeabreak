import React, { ChangeEvent, useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState<number>(50000);

  const startTimer = (time: number): void => {
    const startTimerNotification = true;
    chrome.storage.sync.set({
      startTimerNotification: startTimerNotification,
      time: time,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const number = Number(e.target.value);
    setTime(number);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTimer(time);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select value={time} onChange={(e) => handleChange(e)}>
          <option value="50000">5 minutes</option>
          <option value="150000">15 minutes</option>
          <option value="300000">30 minutes</option>
          <option value="600000">1 hours</option>
        </select>
        <button type="submit">Set timer</button>
      </form>
    </div>
  );
}

export default App;
