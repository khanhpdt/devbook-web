import React from "react"
import "./App.scss"
import FileDropModal from "./components/FileDropModal/container"
import NavBar from "./components/NavBar/container"
import FileList from "./components/FileList/container"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <FileList />

          <FileDropModal />
        </div>
      </div>
    </Router>
  )
}

export default App
