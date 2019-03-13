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
  buttonDiv: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.buttonDiv = React.createRef();
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
        ref={this.buttonDiv}
        style={
          this.state.isOpen ? { backgroundColor: "rgba(77, 74, 74, 0.87)" } : {}
        }
        className="icon_div"
      >
        <img
          className="icon_img"
          src={icon}
          alt="brightness"
          onClick={this.tooglePopupHandler}
        />
        {this.state.isOpen ? (
          <PopUp
            id={id}
            className={className}
            type={type}
            onChange={onChange}
            click={this.tooglePopupHandler}
            min={min}
            max={max}
            step={step}
            value={value}
          />
        ) : null}
      </div>
    );
  }
  private tooglePopupHandler = (e: React.MouseEvent) => {
    document.addEventListener("click", this.outsideClickHandler);
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  private outsideClickHandler = (e: any) => {
    if (this.buttonDiv.current) {
      if (this.buttonDiv && !this.buttonDiv.current.contains(e.target)) {
        this.setState({ isOpen: false });
      }
    }
  };
}

export default Button;
