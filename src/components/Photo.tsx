import * as React from "react";
import "../style/Workspace.css";

interface Props {
  brightness: number;
  contrast: number;
  file: string;
}

interface State {
  angle: number;
  boxCenterPoint: {
    x: number;
    y: number;
  };
  currentAngle: number;
  isActive: boolean;
  startAngle: number;
}

class Photo extends React.Component<Props, State> {
  refbox: React.RefObject<HTMLImageElement>;

  constructor(props: Props) {
    super(props);
    this.refbox = React.createRef();
    this.state = {
      angle: 0,
      boxCenterPoint: {
        x: 0,
        y: 0
      },
      currentAngle: 0,
      isActive: false,
      startAngle: 0
    };
  }

  componentDidMount() {
    if (this.refbox.current) {
      const boxPosition = this.refbox.current.getBoundingClientRect();
      // get the current center point
      const boxCenterX = boxPosition.left + boxPosition.width / 2;
      const boxCenterY = boxPosition.top + boxPosition.height / 2;
      // update the state
      this.setState({
        boxCenterPoint: {
          x: boxCenterX,
          y: boxCenterY
        }
      });
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.file !== prevProps.file && this.refbox.current) {
      this.refbox.current.style.transform = "rotate(0deg)";
    }
  }

  render() {
    const { file, brightness, contrast } = this.props;

    return (
      <img
        className={this.state.isActive ? "photo rotate photo_shadow" : "photo"}
        style={{ filter: `contrast(${contrast}) brightness(${brightness})` }}
        src={file}
        onMouseDown={this.mouseDownHandler}
        onMouseUp={this.mouseUpHandler}
        onMouseMove={this.mouseMoveHandler}
        onMouseLeave={this.mouseUpHandler}
        ref={this.refbox}
      />
    );
  }

  private deslectAll = () => {
    if (window.getSelection()) {
      window.getSelection().removeAllRanges();
    }
    if (document.getSelection()) {
      document.getSelection()!.removeAllRanges();
    }
  };
  // method to get the positionof the pointer event relative to the center of the box
  private getPositionFromCenter = (e: React.MouseEvent) => {
    const { boxCenterPoint } = this.state;
    const fromBoxCenter = {
      x: e.clientX - boxCenterPoint.x,
      y: -(e.clientY - boxCenterPoint.y)
    };
    return fromBoxCenter;
  };

  private mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const fromBoxCenter = this.getPositionFromCenter(e);
    const newStartAngle =
      90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);
    this.setState({
      isActive: true,
      startAngle: newStartAngle
    });
  };

  private mouseUpHandler = (e: React.MouseEvent) => {
    this.deslectAll();
    e.stopPropagation();
    const { isActive, angle, startAngle, currentAngle } = this.state;
    if (isActive) {
      const newCurrentAngle = currentAngle + (angle - startAngle);
      this.setState({
        currentAngle: newCurrentAngle,
        isActive: false
      });
    }
  };

  private mouseMoveHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { isActive, currentAngle, startAngle } = this.state;
    if (isActive && this.refbox.current) {
      const fromBoxCenter = this.getPositionFromCenter(e);
      const newAngle =
        90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);

      this.refbox.current.style.transform =
        "rotate(" +
        (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
        "deg)";
      this.setState({
        angle: newAngle
      });
    }
  };
}

export default Photo;
