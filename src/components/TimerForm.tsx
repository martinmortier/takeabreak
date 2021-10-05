import React, { ChangeEventHandler } from "react";

type TimerFormprops = {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  time: number;
};
const TimerForm = ({ handleChange, time }: TimerFormprops) => {
  return (
    <div>
      <select value={time} onChange={handleChange}>
        <option value="5000">5 secondes</option>
        <option value="50000">5 minutes</option>
        <option value="150000">15 minutes</option>
        <option value="300000">30 minutes</option>
        <option value="600000">1 hours</option>
      </select>
    </div>
  );
};

export default TimerForm;
