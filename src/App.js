import React from "react"
import "./App.scss"
import FileDropModal from "./components/FileDropModal/container"
import NavBar from "./components/NavBar/container"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home/component"
import FileView from "./components/FileView/component"

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
