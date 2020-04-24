import React from "react"
import "./App.scss"
import FileDropModal from "./components/FileDropModal/container"
import NavBar from "./components/NavBar/container"
import FileList from "./components/FileList/container"

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <FileList />

        <FileDropModal />
      </div>
    </div>
  )
}

export default App
