import * as React from 'react'
import '../style/Workspace.css';

import Photo from './Photo'

interface IProps {
    brightness: number;
    file: string;
}

class Workspace extends React.Component<IProps, {}>{
    
    public render() {
        const {file, brightness} = this.props
        return (
          <div className="workspace">
              <Photo file={file} brightness={brightness}/>
          </div>
        );
      }
}

export default Workspace