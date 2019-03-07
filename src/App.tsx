import * as React from 'react';

import PhotoImportMenu from './components/PhotoImportMenu'
import Toolbar from './components/Toolbar'
import Workspace from './components/Workspace'

import './style/App.css';

interface IState {
  brightness: number;
  labelText: string;
  selectedFile?: File;
  tempUrl: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);
    this.state={
      brightness: 1,
      labelText: 'Choose file',
      selectedFile: undefined,
      tempUrl: ''
    }
  }

 

  public render() {
    return (
      <div className="container">
          <PhotoImportMenu fileHandler={this.fileSelectedHandler} labelText={this.state.labelText}/>
        <div className="row h-100">
          <div className="col-3 paddingRight">
          <Toolbar brightness={this.state.brightness} brightnessHandler={this.brightnessChangeHandler}/>
          </div>
          <div className="col-9  paddingLeft">
          <Workspace brightness={this.state.brightness} file={this.state.tempUrl}/>
          </div>
        </div>
      </div>
    );
  }

  private fileSelectedHandler = (e: React.FormEvent) => {
    const event = e.target as HTMLInputElement;
    const file: File = (event.files as FileList)[0]
    this.setState({
      brightness: 1,
      labelText: file.name,
      selectedFile: file,
      tempUrl:  URL.createObjectURL(file)})
   }

   private brightnessChangeHandler = (e: React.FormEvent) => {
     const event = e.target as HTMLInputElement;
     this.setState({
       brightness: parseFloat(event.value)
     }) 
   }
}

export default App;
