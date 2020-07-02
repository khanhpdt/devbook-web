import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import CommentList from "../CommentList/component"
import SinglePagePdfView from "../SinglePagePdfView/component"
import "./component.scss"

function arrayBufferToBase64(buffer) {
  let binary = ""
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

export default function FileView({ onStart, downloadFile, onClickEdit, file, fileRawContent }) {
  const { fileId } = useParams()

  useEffect(() => {
    onStart(fileId)
  }, [onStart, fileId])

  useEffect(() => {
    if (file.id) {
      downloadFile(file.id)
    }
  }, [downloadFile, file.id])

  const content =
    fileRawContent === null ? null : (
      <div className="content-container columns">
        <div className="column is-9">
          <SinglePagePdfView src={arrayBufferToBase64(fileRawContent)} />
        </div>
        <div className="column is-3">
          <CommentList />
        </div>
      </div>
    )

  const title = (
    <div className="title-container">
      <div className="mr-4">
        <h2 className="title-text">{file ? file.name : ""}</h2>
      </div>
      <div>
        <button className="button" onClick={() => onClickEdit(file)}>
          <span className="icon is-small">
            <i className="fas fa-edit" />
          </span>
        </button>
      </div>
    </div>
  )

  return (
    <div>
      {title}
      {content}
    </div>
  )
}
