import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import _ from "lodash/collection"

import "./component.scss"

import Pagination from "../../../components/Pagination"

export default function BookList({ books, nPages, onStart, onDeleteBook }) {
  useEffect(() => {
    onStart()
  }, [onStart])

  const noBook =
    books === null || books.length === 0 ? <div className="panel-block">No book found.</div> : null

  const pagination =
    books === null ? null : (
      <div className="panel-block" style={{ justifyContent: "flex-end" }}>
        <Pagination currentPage={1} nPages={nPages} />
      </div>
    )

  const bookList = (
    <div className="panel">
      <p className="panel-heading">Books</p>
      {_.map(books, (book) => {
        return (
          <Link className="panel-block" to={`/book/${book.id}`} key={book.id}>
            <div className="book-row-container">
              <div>{book.title}</div>
              <div>
                <button
                  className="button"
                  onClick={(e) => {
                    e.preventDefault()
                    onDeleteBook(book.id)
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
      {noBook}
      {pagination}
    </div>
  )

  return <div>{bookList}</div>
}
