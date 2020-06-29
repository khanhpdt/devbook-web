import React, { useEffect, useState } from "react"
import _ from "lodash/collection"
import "./component.scss"

export default function OutlineView({ pdfDoc, onSelectOutlineItemPageIndex }) {
  const [outline, setOutline] = useState(null)
  const [selectedItemId, setSelectedItemId] = useState(null)

  useEffect(() => {
    const readOutline = async () => {
      if (!pdfDoc) {
        return
      }
      const o = await pdfDoc.getOutline()
      setOutline(o)

      setIds(o, 1)
    }
    readOutline()
  }, [pdfDoc])

  const setIds = (items, startIndex) => {
    let idx = startIndex
    for (let i = 0; i < items.length; i++) {
      items[i]["id"] = idx
      if (items[i].items) {
        idx = setIds(items[i].items, idx + 1)
      } else {
        idx++
      }
    }
    return idx
  }

  const onSelect = async (item) => {
    setSelectedItemId(item.id)
    if (item.dest && item.dest.length > 0) {
      const pi = await pdfDoc.getPageIndex(item.dest[0])
      onSelectOutlineItemPageIndex(pi + 1)
    }
  }

  const OutlineItemList = ({ items }) => {
    if (!items) {
      return null
    }
    return (
      <ul className="menu-list">
        {_.map(items, (o, i) => {
          return <OutlineItem key={i} item={o}/>
        })}
      </ul>
    )
  }

  const isSelected = (item) => {
    return item.id === selectedItemId
  }

  const OutlineItem = ({ item }) => {
    return (
      <li>
        <a className={isSelected(item) ? "is-active" : ""} onClick={() => onSelect(item)}>{item.title}</a>

        <OutlineItemList items={item.items}/>
      </li>
    )
  }

  return (
    <div className="menu outline-container">
      <OutlineItemList items={outline}/>
    </div>
  )
}
