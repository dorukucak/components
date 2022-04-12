import React, { useState } from "react";
import classes from "./SlidingSwitch.module.scss";

interface ISlidingSwitch {
  isOn: boolean;
  handleToggle: () => void;
}

const SlidingSwitch: React.FC<ISlidingSwitch> = ({ isOn, handleToggle }) => {
  console.log(isOn);

  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        style={{ visibility: "hidden" }} /* hides default checkbox */
        className={isOn ? classes.reactSwitchOn : classes.reactSwitchOff}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={isOn ? classes.reactSwitchLabelOn : classes.reactSwitchLabel}
        htmlFor={`react-switch-new`}
      >
        <span
          className={
            isOn ? classes.reactSwitchButtonOn : classes.reactSwitchButton
          }
        />
      </label>
    </>
  );
};

export default SlidingSwitch;
