import React, { useState } from "react";
import classes from "./SlidingSwitch.module.scss";

interface ISlidingSwitch {
  modules: Array<object>;
  index: number;
}

const SlidingSwitch: React.FC<ISlidingSwitch> = ({ modules, index }) => {
  const [switchToggle, setSwitchToggle] = useState(false);
  const handleToggle = () => setSwitchToggle(!switchToggle);

  return (
    <div key={`react-switch-div-${index}`}>
      <input
        onChange={handleToggle}
        style={{ visibility: "hidden" }} /* hides default checkbox */
        className={
          switchToggle ? classes.reactSwitchOn : classes.reactSwitchOff
        }
        id={`react-switch-input-${index}`}
        type="checkbox"
      />
      <label
        id={`react-switch-label`}
        className={
          switchToggle ? classes.reactSwitchLabelOn : classes.reactSwitchLabel
        }
        htmlFor={`react-switch-input-${index}`}
      >
        <span
          id={`react-switch-ball`}
          className={
            switchToggle
              ? classes.reactSwitchButtonOn
              : classes.reactSwitchButton
          }
        />
      </label>
    </div>
  );
};

export default SlidingSwitch;
