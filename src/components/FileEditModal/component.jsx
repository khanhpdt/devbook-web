import React, { useState } from "react"
import TagAutoSuggest from "../TagAutoSuggest/component"

export default function FileEditModal({ close, save, isActive, file }) {
  const [fileName, setFileName] = useState(file ? file.name : "")
  const [tags, setTags] = useState(file && file.tags ? file.tags : [])
  const isActiveClass = isActive ? "is-active" : ""

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
              <TagAutoSuggest
                tags={tags}
                tagSuggestions={["s1", "s2", "s3"]}
                onChangeTags={(ts) => setTags(ts)}
              />
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
