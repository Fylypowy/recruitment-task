import * as React from "react";

import "../style/PhotoImportMenu.css";

const fileFormats = [".png", ".jpg"];

interface Props {
  fileHandler: (e: React.FormEvent) => void;
  labelText: string;
}

function PhotoImportMenu({ fileHandler, labelText }: Props) {
  return (
    <div className="photo_import_menu align-items-center mt-3">
      <div className="input-group ">
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
