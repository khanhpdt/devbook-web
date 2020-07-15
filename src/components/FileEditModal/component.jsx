import React, { useEffect, useState } from "react"
import TagAutoSuggest from "../TagAutoSuggest/container"

export default function FileEditModal({ close, save, isActive, file }) {
  const [fileName, setFileName] = useState("")
  const [tags, setTags] = useState([])
  const isActiveClass = isActive ? "is-active" : ""

  useEffect(() => {
    if (file) {
      setFileName(file.name)
      setTags(file.tags ? file.tags : [])
    }
  }, [file])

  const onChangeName = (e) => {
    setFileName(e.target.value)
  }

  const onSave = () => {
    save({
      id: file.id,
      name: fileName,
      tags: tags,
    })
  }

  return (
    <div className={"modal " + isActiveClass}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit file</p>
          <button className="delete" aria-label="close" onClick={() => close()} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={fileName}
                onChange={(e) => onChangeName(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tags</label>
            <div className="control">
              {isActive ? <TagAutoSuggest tags={tags} onChangeTags={(ts) => setTags(ts)} /> : null}
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={() => onSave()}>
            Save
          </button>
          <button className="button" onClick={() => close()}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}
