import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.scss"
import FileDropModal from "./components/FileDropModal/container"
import FileView from "./components/FileView/container"
import Home from "./components/Home/component"
import NavBar from "./components/NavBar/container"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/file/:fileId" component={FileView} />

          <FileDropModal />
        </div>
      </div>
    </Router>
  )
}

export default App
