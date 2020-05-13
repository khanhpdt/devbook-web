import React from "react"
import { Document, Page } from "react-pdf"
import "./component.scss"

function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent")
  textLayers.forEach((layer) => {
    const { style } = layer
    style.top = "0"
    style.left = "0"
    style.transform = ""
  })
}

export default function PdfView({ src }) {
  return (
    <div>
      <Document file={src} className="pdf-document">
        <Page
          pageNumber={3}
          renderMode="svg"
          className="pdf-page-svg"
          onLoadSuccess={removeTextLayerOffset}
        />
      </Document>
      <p>Page 3</p>
    </div>
  )
}
