import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import TimerForm from "./components/TimerForm";
function App() {
  const [time, setTime] = useState<number>(5000);
  const [startTimerNotification, setStartTimerNotification] = useState<boolean>(false);

  const startTimer = (time: number, checked: boolean): void => {
    chrome.storage.sync.set({
      startTimerNotification: checked,
      time: time,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const number: number = Number(e.target.value);
    setTime(number);
    startTimer(number, startTimerNotification);
  };

  const handleChangeStartTimer = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setStartTimerNotification(e.target.checked);
    console.log("TIME",time);
    startTimer(time, e.target.checked);
  };
  
  const syncData = (): void => {
    chrome.storage.sync.get(
      ["startTimerNotification", "time"],
      ({ startTimerNotification, time }) => {
        setStartTimerNotification(startTimerNotification)
        if(time) setTime(time)
      }
    );
  }

  useEffect(() => {
    syncData()
  }, []);

  return (
    <div>
      <Switch name="Start timer" onChange={handleChangeStartTimer} checked={startTimerNotification}/>
      {startTimerNotification && (
        <TimerForm handleChange={handleChange} time={time} />
      )}
    </div>
  );
}

export default App;
