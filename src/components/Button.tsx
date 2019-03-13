import * as React from "react";
import "../style/Toolbar.css";

import PopUp from "./PopUp";

interface Props {
  id: string;
  className: string;
  type: string;
  onChange: (e: React.FormEvent) => void;
  min: number;
  max: number;
  step: number;
  value: number;
  icon: string;
}

interface State {
  isOpen: boolean;
}

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    const {
      id,
      className,
      type,
      onChange,
      min,
      max,
      step,
      value,
      icon
    } = this.props;
    return (
      <div
        style={
          this.state.isOpen ? { backgroundColor: "rgba(77, 74, 74, 0.87)" } : {}
        }
        className="icon_div"
      >
        <img
          className="icon_img"
          src={icon}
          alt="brightness"
          onClick={this.openPopupHandler}
        />
        {this.state.isOpen ? (
          <PopUp
            id={id}
            className={className}
            type={type}
            onChange={onChange}
            click={this.openPopupHandler}
            min={min}
            max={max}
            step={step}
            value={value}
          />
        ) : null}
      </div>
    );
  }
  private openPopupHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const isOpen = !this.state.isOpen;
    this.setState({
      isOpen
    });
  };
}

export default Button;
