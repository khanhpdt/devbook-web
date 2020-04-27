import React, { useEffect } from "react"
import _ from "lodash/collection"
import Pagination from "../Pagination"

export default function FileList({ files, nPages, onStart }) {
  useEffect(() => {
    onStart()
  }, [onStart])

  const pagination = files === null ? null : <Pagination currentPage={1} nPages={nPages} />

  const fileList = (
    <div className="panel">
      <p className="panel-heading">Files</p>
      {_.map(files, (f) => {
        return (
          <a className="panel-block" key={f.id}>
            {f.name}
          </a>
        )
      })}
      <div className="panel-block" style={{ justifyContent: "flex-end" }}>
        {pagination}
      </div>
    </div>
  )

  return <div>{fileList}</div>
}
