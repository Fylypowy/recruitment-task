import * as React from "react";

import "../style/PhotoImportMenu.css";

const fileFormats = [".png", ".jpg"];

interface Props {
  fileHandler: (e: React.FormEvent) => void;
  labelText: string;
}

function PhotoImportMenu({ fileHandler, labelText }: Props) {
  return (
    <div className="row  photo_import_menu">
      <div className="col input-group align-self-center">
        <div className="custom-file">
          <input
            id="file_upload"
            type="file"
            className="custom-input-file"
            accept={fileFormats.toString()}
            onChange={fileHandler}
          />
          <label className="custom-file-label" htmlFor="file_upload">
            {labelText}
          </label>
        </div>
      </div>
    </div>
  );
}

export default PhotoImportMenu;
