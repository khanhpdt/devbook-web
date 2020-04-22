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
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Upload Files</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
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
        <footer class="modal-card-foot">
          <button class="button is-success" onClick={() => upload(acceptedFiles)}>
            Upload
          </button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  )
}
