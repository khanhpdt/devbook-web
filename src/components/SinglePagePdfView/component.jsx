import React, { useEffect, useState } from "react"
import "./component.scss"
import PdfJsView from "./SinglePagePdfJsView/component"
import pdfjs from "pdfjs-dist"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry"
import OutlineView from "./OutlineView/component"

const CMAP_URL = "../../../../node_modules/pdfjs-dist/cmaps/"
const CMAP_PACKED = true

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function PdfView({ src }) {
  const [pdfDoc, setPdfDoc] = useState(null)
  const [page, setPage] = useState(1)
  const [displayedPageNumber, setDisplayedPageNumber] = useState("1")
  const [pageCount, setPageCount] = useState(null)
  const [scale, setScale] = useState(1.0)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.keyCode === 37) {
        // ArrowLeft
        navigateBack()
      } else if (e.keyCode === 39) {
        // ArrowRight
        navigateNext()
      } else if (e.keyCode === 107 && e.altKey) {
        // Alt + "+"
        zoomIn()
      } else if (e.keyCode === 109 && e.altKey) {
        // Alt + "-"
        zoomOut()
      }
    }

    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  })

  useEffect(() => {
    const readPdf = async () => {
      const loadingTask = pdfjs.getDocument({
        data: atob(src),
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED,
      })

      const pdfDoc = await loadingTask.promise
      setPdfDoc(pdfDoc)

      const { numPages } = pdfDoc
      setPageCount(numPages)
    }

    readPdf()
  }, [src])

  const onChangePage = (e) => {
    if (e.target.value.trim() === "") {
      setDisplayedPageNumber("")
    } else {
      const newPage = parseInt(e.target.value)
      setDisplayedPageNumber(newPage.toString())
    }
  }

  const onSubmitPage = (e) => {
    if (e.keyCode === 13) {
      const newPage = parseInt(e.target.value)
      setPage(newPage)
    }
  }

  const docView = pdfDoc === null ? null : <PdfJsView pdfDoc={pdfDoc} page={page} scale={scale} />

  const changePage = (p) => {
    setPage(p)
    setDisplayedPageNumber(p.toString())
  }

  const navigateBack = () => {
    changePage(page - 1)
  }

  const navigateNext = () => {
    changePage(page + 1)
  }

  const scaleFactor = 0.25

  const zoomIn = () => {
    setScale(scale + scaleFactor)
  }

  const zoomOut = () => {
    setScale(scale - scaleFactor)
  }

  const navigation =
    pdfDoc === null ? null : (
      <div className="nav-section">
        <div className="mx-1">
          <input
            style={{ width: "4rem", textAlign: "right" }}
            className="input"
            type="text"
            value={displayedPageNumber}
            onKeyDown={onSubmitPage}
            onChange={onChangePage}
          />
        </div>
        <div>/ {pageCount}</div>
        <div className="buttons has-addons mx-1">
          <button className="button mx-1" onClick={navigateBack}>
            <span className="icon">
              <i className="fas fa-chevron-left" />
            </span>
          </button>
          <button className="button mx-1" onClick={navigateNext}>
            <span className="icon">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </div>
        <div className="buttons has-addons">
          <button className="button mx-1" onClick={zoomOut}>
            <span className="icon">
              <i className="fas fa-search-minus" />
            </span>
          </button>
          <button className="button mx-1" onClick={zoomIn}>
            <span className="icon">
              <i className="fas fa-search-plus" />
            </span>
          </button>
        </div>
      </div>
    )

  return (
    <div className="columns">
      <div className="column is-3">
        <div>{navigation}</div>
        <OutlineView pdfDoc={pdfDoc} onSelectOutlineItemPageIndex={(p) => changePage(p)} />
      </div>
      <div className="pdf-content-view column is-9">{docView}</div>
    </div>
  )
}
