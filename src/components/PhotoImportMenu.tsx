import * as React from 'react'

import '../style/PhotoImportMenu.css'

const fileFormats = [".png",".jpg"]

 interface IProps {
    fileHandler: (e: React.FormEvent)=>void;
    labelText: string;
}

function PhotoImportMenu({fileHandler, labelText}: IProps){
    return (
    <div className="row  photoImportMenu">
        <div className="col input-group align-self-center">
            <div className="custom-file">
                <input id="fileUpload" type="file" className="custom-input-file" accept={fileFormats.toString()} onChange={fileHandler}/>
                <label className="custom-file-label" htmlFor="fileUpload">{labelText}</label>
            </div>
        </div>
    </div>)
    
}

export default PhotoImportMenu