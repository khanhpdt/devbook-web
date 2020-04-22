import React from "react"
import "./App.scss"
import FileDropModal from "./components/FileDropModal/container"
import NavBar from "./components/NavBar/container"

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
