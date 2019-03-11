import * as React from "react";

import PhotoImportMenu from "./components/PhotoImportMenu";
import Toolbar from "./components/Toolbar";
import Workspace from "./components/Workspace";

import "./style/App.css";

interface State {
  brightness: number;
  labelText: string;
  tempUrl: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      brightness: 1,
      labelText: "Choose file",
      tempUrl: ""
    };
  }

  render() {
    return (
      <div className="container">
        <PhotoImportMenu
          fileHandler={this.fileSelectedHandler}
          labelText={this.state.labelText}
        />
        <div className="row h-100">
          <div className="col-3 pr-0">
            <Toolbar
              brightness={this.state.brightness}
              brightnessHandler={this.brightnessChangeHandler}
            />
          </div>
          <div className="col-9  pl-0">
            <Workspace
              brightness={this.state.brightness}
              file={this.state.tempUrl}
            />
          </div>
        </div>
      </div>
    );
  }

  private fileSelectedHandler = (e: React.FormEvent) => {
    const event = e.target as HTMLInputElement;
    const file: File = (event.files as FileList)[0];
    if (file === undefined) {
      return;
    } else {
      if (file.name.length > 8) {
        const name = file.name.slice(0, 3) + "... " + file.name.slice(-4);
        this.setState({
          brightness: 1,
          labelText: name,
          tempUrl: URL.createObjectURL(file)
        });
      } else {
        this.setState({
          brightness: 1,
          labelText: file.name,
          tempUrl: URL.createObjectURL(file)
        });
      }
    }
  };

  private brightnessChangeHandler = (e: React.FormEvent) => {
    const event = e.target as HTMLInputElement;
    this.setState({
      brightness: parseFloat(event.value)
    });
  };
}

export default App;
