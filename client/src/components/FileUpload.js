import React from 'react';

export function UploadForm(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span
          className="input-group-text"
          id="inputGroupFileAddon01"
          {...props}
        >
          Upload
        </span>
      </div>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
          {...props}
        />
        <label className="custom-file-label" for="inputGroupFile01" {...props}>
          Choose Picture (jpg or png)
        </label>
      </div>
    </div>
  );
}
