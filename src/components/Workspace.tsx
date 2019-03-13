import * as React from "react";
import "../style/Workspace.css";

import drag from "../assets/drag_and_drop.svg";
import Photo from "./Photo";

interface Props {
  brightness: number;
  file: string;
}

class Workspace extends React.Component<Props, {}> {
  workspaceDiv: React.RefObject<HTMLDivElement>;
  workspaceSize: {
    height: number;
    width: number;
    x: number;
    y: number;
  };

  constructor(props: Props) {
    super(props);
    this.workspaceDiv = React.createRef();
  }

  componentDidMount() {
    if (this.workspaceDiv.current) {
      const divXY = this.workspaceDiv.current.getBoundingClientRect();
      this.workspaceSize = {
        height: this.workspaceDiv.current.offsetHeight,
        width: this.workspaceDiv.current.offsetWidth,
        x: divXY.left,
        y: divXY.top
      };
    }
    this.getWorkspaceParams(this.workspaceSize);
    window.addEventListener("resize", this.resizeHandler);
  }

  render() {
    const { file, brightness } = this.props;
    console.log(file);
    return (
      <div
        ref={this.workspaceDiv}
        style={
          file
            ? {}
            : {
                background: `url(${drag})`,
                backgroundColor: "rgba(117, 113, 113, 0.87)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "40% 40%"
              }
        }
        className="workspace"
      >
        <Photo file={file} brightness={brightness} />
      </div>
    );
  }

  private resizeHandler = () => {
    if (this.workspaceDiv.current) {
      const divXY = this.workspaceDiv.current.getBoundingClientRect();
      this.workspaceSize = {
        height: this.workspaceDiv.current.offsetHeight,
        width: this.workspaceDiv.current.offsetWidth,
        x: divXY.left,
        y: divXY.top
      };
      this.getWorkspaceParams(this.workspaceSize);
    }
  };
  private getWorkspaceParams = (workspaceSize: {
    height: number;
    width: number;
    x: number;
    y: number;
  }) => {
    this.workspaceSize = {
      height: workspaceSize.height,
      width: workspaceSize.width,
      x: workspaceSize.x,
      y: workspaceSize.y
    };
  };
}

export default Workspace;
