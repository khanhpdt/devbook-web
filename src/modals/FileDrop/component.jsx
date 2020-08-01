import React from "react"
import { useDropzone } from "react-dropzone"
import _ from "lodash/collection"
import * as fileApi from "../../api/bookApi"

import styles from "./component.module.scss"

function upload(acceptedFiles) {
  fileApi.uploadBooks(acceptedFiles)
}

export default function FileDropModal(props) {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone()

  const fileItems = _.map(acceptedFiles, (f) => {
    return (
      <div className="panel-block" key={f.path}>
        {f.name} - {Math.round(f.size / 1000)} KB
      </div>
    )
  })

  const close = () => {
    props.close()
  }

  const isActiveClass = props.isActive ? "is-active" : ""

  return (
    <div className={"modal " + isActiveClass}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Upload Files</p>
          <button className="delete" aria-label="close" onClick={() => close()}></button>
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
          <button className="button" onClick={() => close()}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}
