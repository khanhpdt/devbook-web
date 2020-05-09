import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import PdfView from "../PdfView/component"
import samplePdf from "./samplePdf.pdf"

export default function FileView({ onStart, file }) {
  const { fileId } = useParams()

  useEffect(() => {
    onStart(fileId)
  }, [onStart, fileId])

  return (
    <div>
      <div>FileId: {file ? file.id : ""}</div>
      <div>FileName: {file ? file.name : ""}</div>
      <div>FilePath: {file ? file.path : ""}</div>
      <div>
        <PdfView src={samplePdf} />
      </div>
    </div>
  )
}
