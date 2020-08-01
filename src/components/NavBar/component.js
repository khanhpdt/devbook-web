import React from "react"
import { Link } from "react-router-dom"

export default function NavBar(props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/books" className="navbar-item">
            Books
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary" onClick={() => props.onClickUpload()}>
                <strong>Upload</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
