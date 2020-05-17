import pdfjs from "pdfjs-dist"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry"
import * as pdfjsViewer from "pdfjs-dist/web/pdf_viewer"
import React, { useEffect, useState } from "react"
import "../../../../node_modules/pdfjs-dist/web/pdf_viewer.css"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

var CMAP_URL = "../../../../node_modules/pdfjs-dist/cmaps/"
var CMAP_PACKED = true

// see https://github.com/mozilla/pdf.js/blob/master/examples/components/pageviewer.js for more details
export default function PdfView({ src, page, scale, onDocLoadSuccess }) {
  const [pdfDoc, setPdfDoc] = useState(null)
  const [pdfPageViewer, setPdfPageViewer] = useState(null)

  useEffect(() => {
    const render = async () => {
      const loadingTask = pdfjs.getDocument({
        data: atob(src),
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED,
      })

      const pdfDoc = await loadingTask.promise
      setPdfDoc(pdfDoc)

      if (onDocLoadSuccess) {
        onDocLoadSuccess(pdfDoc)
      }

      const pdfPage = await pdfDoc.getPage(page)

      const container = document.getElementById("pdfPageContainer")

      var eventBus = new pdfjsViewer.EventBus()

      const pdfView = new pdfjsViewer.PDFPageView({
        container: container,
        id: page,
        scale: scale,
        renderer: "svg",
        defaultViewport: pdfPage.getViewport({ scale: scale }),
        eventBus: eventBus,
        // We can enable text/annotations layers, if needed
        textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(),
        annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
      })
      setPdfPageViewer(pdfView)

      pdfView.setPdfPage(pdfPage)
      pdfView.draw()
    }

    render()
  }, [])

  useEffect(() => {
    const render = async () => {
      if (pdfDoc) {
        const pdfPage = await pdfDoc.getPage(page)
        pdfPageViewer.setPdfPage(pdfPage)
        pdfPageViewer.draw()
      }
    }
    render()
  }, [page])

  useEffect(() => {
    const render = () => {
      if (pdfPageViewer) {
        pdfPageViewer.update(scale)
      }
    }
    render()
  }, [scale])

  return <div id="pdfPageContainer" className="pdfViewer singlePageView"></div>
}
