import React,{ useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState<number>(5000);
  const [startTimerNotification, setStartTimerNotification] = useState<boolean>(false)

  const startTimer = (time: number): void => {
    setStartTimerNotification(true)
    chrome.storage.sync.set({
      startTimerNotification: startTimerNotification,
      time: time,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const number: number = Number(e.target.value);
    setTime(number);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    startTimer(time);
  };

  return (
    <div>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <select value={time} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}>
          <option value="5000">5 secondes</option>
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
