import * as React from "react";
import "../style/Toolbar.css";

interface Props {
  id: string;
  className: string;
  type: string;
  onChange: (e: React.FormEvent) => void;
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
    </div>
  );
}

export default PopUp;
