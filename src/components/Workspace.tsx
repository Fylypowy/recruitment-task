import * as React from "react";
import "../style/Workspace.css";

import Photo from "./Photo";

interface Props {
  brightness: number;
  file: string;
}

class Workspace extends React.Component<Props, {}> {
  workspaceDiv: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.workspaceDiv = React.createRef();
  }

  componentDidUpdate() {
    if (this.workspaceDiv.current) {
      console.log(this.workspaceDiv.current.getBoundingClientRect());
    }
  }

  render() {
    const { file, brightness } = this.props;
    return (
      <div ref={this.workspaceDiv} className="workspace">
        <Photo file={file} brightness={brightness} />
      </div>
    );
  }
}

export default Workspace;
