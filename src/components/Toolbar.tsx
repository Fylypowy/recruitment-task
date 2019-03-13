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
      <div className="row menu mr-0">
        <div className="col-md-12 col-2 logo mb-3 p-0">
          <img className="camera" src={logo} alt="logo" />
        </div>

        <div className="col-md-12 col-10 toolbar">
          <div className="row">
            <div className="col-1 col-md-12 align-self-stretch break" />
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
      </div>
    );
  }
}

export default Toolbar;
