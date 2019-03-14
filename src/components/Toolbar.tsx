import * as React from "react";
import "../style/Toolbar.css";

import contrastIcon from "../assets/adjust-solid.svg";
import logo from "../assets/camera-retro-solid.svg";
import brighIcon from "../assets/sun-regular.svg";

import Button from "./Button";

interface Props {
  brightnessHandler: (e: React.FormEvent) => void;
  brightness: number;
  contrast: number;
  contrastHandler: (e: React.FormEvent) => void;
}

class Toolbar extends React.Component<Props, {}> {
  render() {
    const {
      brightnessHandler,
      brightness,
      contrast,
      contrastHandler
    } = this.props;
    return (
      <div className="d-flex col-12 col-md-1 pr-3 mb-md-0 mb-3 pr-md-0 align-items-center flex-row flex-md-column">
        <div className="logo mb-md-2">
          <img className="camera" src={logo} alt="logo" />
        </div>
        <div className="d-flex toolbar flex-row flex-md-column flex-grow-1 px-3 px-md-0 py-md-3">
          <Button
            id="range"
            className="slider"
            type="range"
            onChange={brightnessHandler}
            min={0}
            max={2}
            step={0.1}
            value={brightness}
            icon={brighIcon}
          />
          <Button
            id="range"
            className="slider"
            type="range"
            onChange={contrastHandler}
            min={0}
            max={2}
            step={0.1}
            value={contrast}
            icon={contrastIcon}
          />
        </div>
      </div>
    );
  }
}

export default Toolbar;
