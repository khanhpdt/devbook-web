import React, { useEffect } from "react"
import _ from "lodash/collection"
import Pagination from "../Pagination"
import { Link } from "react-router-dom"

export default function FileList({ files, nPages, onStart }) {
  useEffect(() => {
    onStart()
  }, [onStart])

  const noFile =
    files === null || files.length === 0 ? <div className="panel-block">No file.</div> : null

  const pagination =
    files === null ? null : (
      <div className="panel-block" style={{ justifyContent: "flex-end" }}>
        <Pagination currentPage={1} nPages={nPages} />
      </div>
    )

  const fileList = (
    <div className="panel">
      <p className="panel-heading">Files</p>
      {_.map(files, (f) => {
        return (
          <Link className="panel-block" to={`/file/${f.id}`} key={f.id}>
            {f.name}
          </Link>
        )
      })}
      {noFile}
      {pagination}
    </div>
  )

  return <div>{fileList}</div>
}
