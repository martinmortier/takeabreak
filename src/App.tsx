import { SelectChangeEvent, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import TimerForm from "./components/TimerForm";
import { useStyles } from './App.styles'
function App() {
  const styles = useStyles()
  const [time, setTime] = useState<number>(5000);
  const [startTimerNotification, setStartTimerNotification] = useState<boolean>(false);

  const startTimer = (time: number, checked: boolean): void => {
    chrome.storage.sync.set({
      startTimerNotification: checked,
      time: time,
    });
  };

  const handleChange = (e: SelectChangeEvent<number>): void => {
    const number: number = Number(e.target.value);
    setTime(number);
    startTimer(number, startTimerNotification);
  };

  const handleChangeStartTimer = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setStartTimerNotification(e.target.checked);
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
    <div className={styles.root}>
    <h1 className={styles.title}>Take a break reminder ! </h1>
    <p className={styles.clockEmoji}>⏰</p>
    <div className={styles.switch}>
      <p>Start: OFF</p>
      <Switch name="Start timer" onChange={handleChangeStartTimer} checked={startTimerNotification}/>
      <p>ON</p>
      </div>
      {startTimerNotification && (
        <TimerForm handleChange={handleChange} time={time} />
      )}
    </div>
  );
}

export default App;
