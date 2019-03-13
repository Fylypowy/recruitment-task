import * as React from "react";
import "../style/Toolbar.css";

import exit from "../assets/times-circle-solid.svg";

interface Props {
  id: string;
  className: string;
  type: string;
  onChange: (e: React.FormEvent) => void;
  click: (e: React.MouseEvent) => void;
  min: number;
  max: number;
  step: number;
  value: number;
}
function PopUp({
  id,
  className,
  type,
  onChange,
  click,
  min,
  max,
  step,
  value
}: Props) {
  return (
    <div className="popup">
      <input
        id={id}
        className={className}
        type={type}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <div className="exit" onClick={click}>
        <img className="exit_img" src={exit} alt="exit" />
      </div>
    </div>
  );
}

export default PopUp;
