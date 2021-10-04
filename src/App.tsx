import { Switch } from "@mui/material";
import React,{ MouseEventHandler, useState } from "react";
import "./App.css";
import TimerForm from "./components/TimerForm";
function App() {
  const [time, setTime] = useState<number>(0);
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
    startTimer(time)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    startTimer(time);
  };

  const handleChangeStartTimer = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setStartTimerNotification(e.target.checked)
  }

  return (
    <div>
      <Switch name="Start timer" onChange={handleChangeStartTimer}/>
      <TimerForm handleChange={handleChange} handleSubmit={handleSubmit} time={time}/>
    </div>
  );
}

export default App;
