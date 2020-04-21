import React from "react"
import { useDropzone } from "react-dropzone"
import _ from "lodash/collection"
import * as fileApi from "../api/fileApi"
import styles from "./FileDrop.module.scss"

function upload(acceptedFiles) {
  fileApi.upload(acceptedFiles)
}

function FileDrop() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone()

  const fileItems = _.map(acceptedFiles, (f) => {
    return (
      <div className="panel-block">
        {f.name} - {Math.round(f.size / 1000)} KB
      </div>
    )
  })

  return (
    <div className="panel is-primary">
      <p className="panel-heading">Upload Files</p>

      <div className={"panel-block has-text-centered " + styles.dropArea} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? "Drop the files here ..."
            : "Drag 'n' drop some files here, or click to select files"}
        </p>
      </div>

      {fileItems}

      <div class="panel-block">
        <button
          class="button is-link is-outlined is-fullwidth"
          onClick={() => upload(acceptedFiles)}
        >
          Upload
        </button>
      </div>
    </div>
  )
}

export default FileDrop
