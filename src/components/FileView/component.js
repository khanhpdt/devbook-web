import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import SinglePagePdfView from "../SinglePagePdfView/component"

function arrayBufferToBase64(buffer) {
  let binary = ""
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

export default function FileView({ onStart, downloadFile, file, fileRawContent }) {
  const { fileId } = useParams()

  useEffect(() => {
    onStart(fileId)
  }, [onStart, fileId])

  useEffect(() => {
    if (file.id) {
      downloadFile(file.id)
    }
  }, [downloadFile, file.id])

  const pdfSrc = fileRawContent === null ? null : `${arrayBufferToBase64(fileRawContent)}`

  const fileView =
    fileRawContent === null ? null : (
      <div>
        <SinglePagePdfView src={pdfSrc} pageNumber={1} />
      </div>
    )

  return (
    <div>
      <h4 className="title is-4">{file ? file.name : ""}</h4>
      {fileView}
    </div>
  )
}
