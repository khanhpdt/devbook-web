import React, { useEffect, useState } from "react"
import _ from "lodash/collection"

export default function OutlineView({ pdfDoc, onSelectOutlineItem }) {
  const [outline, setOutline] = useState(null)

  useEffect(() => {
    const readOutline = async () => {
      if (!pdfDoc) {
        return
      }
      const o = await pdfDoc.getOutline()
      setOutline(o)
    }
    readOutline()
  }, [pdfDoc])

  const onSelect = async (item) => {
    if (item.dest && item.dest.length > 0 && item.dest[0].num) {
      const pi = await pdfDoc.getPageIndex(item.dest[0])
      onSelectOutlineItem(pi + 1)
    }
  }

  return outline === null ? null : (
    <div>
      <ul className="menu-list">
        {_.map(outline, (o, i) => {
          return (
            <li key={i} onClick={() => onSelect(o)}>
              <a>{o.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
