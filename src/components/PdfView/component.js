import React, { useState } from "react"
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

export default function PdfView({ src, pageNumber }) {
  const [page, setPage] = useState(pageNumber ? pageNumber : 1)
  const [displayedPageNumber, setDisplayedPageNumber] = useState(pageNumber ? pageNumber : 1)
  const [pageCount, setPageCount] = useState(null)

  const onDocLoadSuccess = (document) => {
    const { numPages } = document
    setPageCount(numPages)
  }

  const onChangePage = (e) => {
    if (e.target.value.trim() === "") {
      setDisplayedPageNumber("")
    } else {
      const newPage = parseInt(e.target.value)
      setDisplayedPageNumber(newPage)
    }
  }

  const onSubmitPage = (e) => {
    if (e.keyCode == 13) {
      const newPage = parseInt(e.target.value)
      setPage(newPage)
    }
  }

  const docView =
    page === null ? null : (
      <Document file={src} className="pdf-document" onLoadSuccess={onDocLoadSuccess}>
        <Page
          pageNumber={page}
          renderMode="svg"
          className="pdf-page-svg"
          onLoadSuccess={removeTextLayerOffset}
        />
      </Document>
    )

  const navigateBack = () => {
    const p = page - 1
    setPage(p)
    setDisplayedPageNumber(p)
  }

  const navigateNext = () => {
    const p = page + 1
    console.log(p)
    setPage(p)
    setDisplayedPageNumber(p)
  }

  const navigation =
    pageCount === null ? null : (
      <div className="nav-section">
        <div>
          <input
            className="input"
            type="text"
            value={displayedPageNumber}
            onKeyDown={onSubmitPage}
            onChange={onChangePage}
          />
        </div>
        <div>/ {pageCount}</div>
        <div className="buttons has-addons">
          <button className="button" onClick={navigateBack}>
            <span className="icon">
              <i className="fa fa-chevron-left"></i>
            </span>
          </button>
          <button className="button" onClick={navigateNext}>
            <span className="icon">
              <i className="fa fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    )

  return (
    <div className="pdf-view">
      {docView}
      {navigation}
    </div>
  )
}
