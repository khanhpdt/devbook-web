import React from "react"
import { useDropzone } from "react-dropzone"
import _ from "lodash/collection"
import * as fileApi from "../../api/fileApi"

import styles from "./index.module.scss"

function upload(acceptedFiles) {
  fileApi.upload(acceptedFiles)
}

export default function FileDropModal() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone()

  const fileItems = _.map(acceptedFiles, (f) => {
    return (
      <div className="panel-block">
        {f.name} - {Math.round(f.size / 1000)} KB
      </div>
    )
  })

  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Upload Files</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className={"has-text-centered " + styles.dropArea} {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              {isDragActive
                ? "Drop the files here ..."
                : "Drag 'n' drop some files here, or click to select files"}
            </p>
          </div>

          {fileItems}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={() => upload(acceptedFiles)}>
            Upload
          </button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  )
}
