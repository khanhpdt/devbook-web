import * as pdfjsViewer from "pdfjs-dist/web/pdf_viewer"
import React, { useEffect, useState } from "react"
import "../../../../node_modules/pdfjs-dist/web/pdf_viewer.css"

// see https://github.com/mozilla/pdf.js/blob/master/examples/components/pageviewer.js for more details
export default function PdfView({ pdfDoc, page, scale }) {
  const [pdfPageViewer, setPdfPageViewer] = useState(null)

  useEffect(() => {
    const render = async () => {
      if (pdfDoc) {
        const pdfPage = await pdfDoc.getPage(page)

        const container = document.getElementById("pdfPageContainer")

        const eventBus = new pdfjsViewer.EventBus()

        if (!pdfPageViewer) {
          const pdfView = new pdfjsViewer.PDFPageView({
            container: container,
            id: page,
            scale: scale,
            renderer: "svg",
            defaultViewport: pdfPage.getViewport({ scale: scale }),
            eventBus: eventBus,
            // We can enable text/annotations layers, if needed
            textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(),
            annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory()
          })
          setPdfPageViewer(pdfView)

          pdfView.setPdfPage(pdfPage)
          pdfView.draw()
        } else {
          pdfPageViewer.setPdfPage(pdfPage)
          pdfPageViewer.draw()
        }
      }
    }
    render()
  }, [pdfDoc, page])

  useEffect(() => {
    const render = () => {
      if (pdfPageViewer) {
        pdfPageViewer.update(scale)
      }
    }
    render()
  }, [scale])

  return <div id="pdfPageContainer" className="pdfViewer singlePageView"/>
}
