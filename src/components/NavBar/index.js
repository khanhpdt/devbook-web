import React from "react"

export default function NavBar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary">
                <strong>Upload</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
