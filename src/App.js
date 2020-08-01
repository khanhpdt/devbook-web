import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./App.scss"

import FileDropModal from "./modals/FileDrop/container"
import NavBar from "./components/NavBar/container"
import Home from "./pages/Home/component"
import Book from "./pages/Book/container"
import BooksPage from "./pages/Books"
import FileEditModal from "./modals/BookEdit/container"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BooksPage} />
          <Route exact path="/book/:bookId" component={Book} />

          <FileDropModal />
          <FileEditModal />
        </div>
      </div>
    </Router>
  )
}

export default App
