import React, { ChangeEventHandler } from "react";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type TimerFormprops = {
  handleChange: (e: SelectChangeEvent<number>) => void;
  time: number;
};
const TimerForm = ({ handleChange, time }: TimerFormprops) => {
  return (
    <div>
      <FormControl fullWidth>
      <Select value={time} onChange={handleChange}>
        <MenuItem value={5000}>5 secondes</MenuItem>
        <MenuItem value={500000}>5 minutes</MenuItem>
        <MenuItem value={15000}>15 minutes</MenuItem>
        <MenuItem value={300000}>30 minutes</MenuItem>
        <MenuItem value={600000}>1 hours</MenuItem>
      </Select>
      </FormControl>
    </div>
  );
};

export default TimerForm;
