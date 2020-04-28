import React from "react"
import { useParams } from "react-router-dom"
import samplePdf from "./samplePdf.pdf"
import PdfView from "../PdfView/component"

export default function FileView() {
  const { fileId } = useParams()
  return (
    <div>
      <div>FileView id={fileId}</div>
      <div>
        <PdfView src={samplePdf} />
      </div>
    </div>
  )
}
