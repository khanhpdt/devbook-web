import React from "react"

export default function Pagination({ nPages, currentPage }) {
  if (nPages < 1) {
    return null
  }

  const isCurrentClass = (p) => (p === currentPage ? "is-current" : "")

  const pages = []

  pages.push(
    <li key={1}>
      <a className={"pagination-link " + isCurrentClass(1)} aria-label="Goto page 1">
        1
      </a>
    </li>
  )

  if (currentPage - 1 > 2) {
    pages.push(
      <li key={"elippsis-1"}>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
    )
  }

  for (let p = currentPage - 1; p <= currentPage + 1; p++) {
    if (p > 1 && p <= nPages) {
      pages.push(
        <li key={p}>
          <a className={"pagination-link " + isCurrentClass(p)} aria-label={"Goto page " + p}>
            {p}
          </a>
        </li>
      )
    }
  }

  if (nPages - currentPage > 2) {
    pages.push(
      <li key="ellipsis-2">
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
    )
  }

  if (nPages > currentPage + 1) {
    pages.push(
      <li key={nPages}>
        <a
          className={"pagination-link " + isCurrentClass(nPages)}
          aria-label={"Goto page " + nPages}
        >
          {nPages}
        </a>
      </li>
    )
  }

  const prev = (
    <a className="pagination-previous" disabled={currentPage <= 1 ? true : false}>
      Previous
    </a>
  )

  const next = (
    <a className="pagination-next" disabled={currentPage >= nPages ? true : false}>
      Next page
    </a>
  )

  return (
    <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
      {prev}
      {next}
      <ul className="pagination-list">{pages}</ul>
    </nav>
  )
}
