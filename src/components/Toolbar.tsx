import * as React from "react";
import "../style/Toolbar.css";

import logo from "../assets/camera-retro-solid.svg";
import brighIcon from "../assets/sun-regular.svg";

import Button from "./Button";

interface Props {
  brightnessHandler: (e: React.FormEvent) => void;
  brightness: number;
}

class Toolbar extends React.Component<Props, {}> {
  render() {
    const { brightnessHandler, brightness } = this.props;
    return (
      <div className="d-flex col-sm-12 col-md-1 pr-3 mb-md-0 mb-sm-3 pr-md-0 align-items-center flex-sm-row flex-md-column">
        <div className="logo mb-md-2">
          <img className="camera" src={logo} alt="logo" />
        </div>
        <div className="toolbar flex-grow-1 px-sm-3 px-md-0 py-md-3">
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
        </div>
      </div>
    );
  }
}

export default Toolbar;
