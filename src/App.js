import React from "react"
import "./App.scss"
import FileDropModal from "./components/FileDropModal"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <div className="container is-fluid">
        <FileDropModal />
      </div>
    </div>
  )
}

export default App
