import React, { useState } from "react"
import "./component.scss"
import PdfJsView from "./SinglePagePdfJsView/component"

export default function PdfView({ src, pageNumber }) {
  const [page, setPage] = useState(pageNumber ? pageNumber : 1)
  const [displayedPageNumber, setDisplayedPageNumber] = useState(pageNumber ? pageNumber : 1)
  const [pageCount, setPageCount] = useState(null)
  const [scale, setScale] = useState(1.0)

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
    if (e.keyCode === 13) {
      const newPage = parseInt(e.target.value)
      setPage(newPage)
    }
  }

  const docView =
    page === null ? null : (
      <PdfJsView
        src={src}
        page={page}
        scale={scale}
        onDocLoadSuccess={onDocLoadSuccess}
      ></PdfJsView>
    )

  const navigateBack = () => {
    const p = page - 1
    setPage(p)
    setDisplayedPageNumber(p)
  }

  const navigateNext = () => {
    const p = page + 1
    setPage(p)
    setDisplayedPageNumber(p)
  }

  const scaleFactor = 0.25

  const zoomIn = () => {
    setScale(scale + scaleFactor)
  }

  const zoomOut = () => {
    setScale(scale - scaleFactor)
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
        <div className="buttons has-addons">
          <button className="button" onClick={zoomOut}>
            <span className="icon">
              <i className="fa fa-search-minus"></i>
            </span>
          </button>
          <button className="button" onClick={zoomIn}>
            <span className="icon">
              <i className="fa fa-search-plus"></i>
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
