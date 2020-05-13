import React from "react"
import { Document, Page } from "react-pdf"
import "./component.scss"

export default function PdfView({ src }) {
  return (
    <div>
      <Document file={src} className="pdf-document">
        <Page pageNumber={3} renderMode="svg" className="pdf-page-svg" />
      </Document>
      <p>Page 3</p>
    </div>
  )
}
