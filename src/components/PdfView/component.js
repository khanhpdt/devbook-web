import React from "react"
import { Document, Page } from "react-pdf"

function onDocumentLoadSuccess() {
  console.log("onDocumentLoadSuccess")
}

export default function PdfView({ src }) {
  return (
    <div>
      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={5} />
      </Document>
      <p>Page 5</p>
    </div>
  )
}
