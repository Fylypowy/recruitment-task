import * as React from "react";

import PhotoImportMenu from "./components/PhotoImportMenu";
import Toolbar from "./components/Toolbar";
import Workspace from "./components/Workspace";

import "./style/App.css";

interface State {
  brightness: number;
  contrast: number;
  labelText: string;
  tempUrl: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      brightness: 1,
      contrast: 1,
      labelText: "Choose file",
      tempUrl: ""
    };
  }

  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <Toolbar
            brightness={this.state.brightness}
            brightnessHandler={this.brightnessChangeHandler}
            contrast={this.state.contrast}
            contrastHandler={this.contrastChangeHandler}
          />
          <div className="col-12 col-md-11 pt-md-0">
            <Workspace
              brightness={this.state.brightness}
              contrast={this.state.contrast}
              file={this.state.tempUrl}
            />
            <PhotoImportMenu
              fileHandler={this.fileSelectedHandler}
              labelText={this.state.labelText}
            />
          </div>
        </div>
      </div>
    );
  }

  private fileSelectedHandler = (e: React.FormEvent) => {
    const event = e.target as HTMLInputElement;
    const file: File = (event.files as FileList)[0];
    let name: string;
    if (file) {
      if (file.name.length > 8) {
        name = file.name.slice(0, 3) + "... " + file.name.slice(-4);
      } else {
        name = file.name;
      }
      this.setState({
        brightness: 1,
        contrast: 1,
        labelText: name,
        tempUrl: URL.createObjectURL(file)
      });
    }
  };

  private brightnessChangeHandler = (e: React.FormEvent) => {
    const element = e.target as HTMLInputElement;
    this.setState({
      brightness: parseFloat(element.value)
    });
  };
  private contrastChangeHandler = (e: React.FormEvent) => {
    const element = e.target as HTMLInputElement;
    this.setState({
      contrast: parseFloat(element.value)
    });
  };
}

export default App;
