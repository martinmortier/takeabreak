import React, { ChangeEventHandler, FormEventHandler } from "react";

type TimerFormprops = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  time: number;
};
const TimerForm = ({ handleSubmit, handleChange, time }: TimerFormprops) => {
  return (
    <div>
      <select value={time} onChange={handleChange}>
        <option value="0"></option>
        <option value="5000">5 secondes</option>
        <option value="50000">5 minutes</option>
        <option value="150000">15 minutes</option>
        <option value="300000">30 minutes</option>
        <option value="600000">1 hours</option>
      </select>
      <button type="submit">Set timer</button>
    </div>
  );
};

export default TimerForm;
