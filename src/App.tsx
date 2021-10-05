import { Switch } from "@mui/material";
import React,{ MouseEventHandler, useState } from "react";
import "./App.css";
import TimerForm from "./components/TimerForm";
function App() {
  const VALUE_START = 5000
  const [time, setTime] = useState<number>(VALUE_START);
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
    startTimer(number)
  };

  const handleChangeStartTimer = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setStartTimerNotification(e.target.checked)
    startTimer(time)
  }

  return (
    <div>
      <Switch name="Start timer" onChange={handleChangeStartTimer}/>
      <TimerForm handleChange={handleChange} time={time}/>
    </div>
  );
}

export default App;
