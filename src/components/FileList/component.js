import React, { useEffect } from "react"
import _ from "lodash/collection"
import Pagination from "../Pagination"
import { Link } from "react-router-dom"
import "./component.scss"

export default function FileList({ files, nPages, onStart, onDeleteFile }) {
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
            <div className="file-row-container">
              <div>{f.name}</div>
              <div>
                <button
                  className="button"
                  onClick={(e) => {
                    e.preventDefault()
                    onDeleteFile(f.id)
                  }}
                >
                  <span className="icon is-medium">
                    <i className="fas fa-trash-alt" />
                  </span>
                </button>
              </div>
            </div>
          </Link>
        )
      })}
      {noFile}
      {pagination}
    </div>
  )

  return <div>{fileList}</div>
}
