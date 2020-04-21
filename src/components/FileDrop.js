import React from "react"
import { useDropzone } from "react-dropzone"
import _ from "lodash/collection"
import * as fileApi from "../api/fileApi"

function upload(acceptedFiles) {
  fileApi.upload(acceptedFiles)
}

function FileDrop() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone()

  const fileItems = _.map(acceptedFiles, (f) => {
    return (
      <li key={f.path}>
        {f.name} - {Math.round(f.size / 1000)} KB
      </li>
    )
  })

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <div>
        <ul>{fileItems}</ul>
      </div>

      <div>
        <button onClick={() => upload(acceptedFiles)}>Upload</button>
      </div>
    </div>
  )
}

export default FileDrop
