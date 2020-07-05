import React, { useEffect, useState } from "react"

export default function FileEditModal({ close, save, isActive, file }) {
  const [fileName, setFileName] = useState(file ? file.name : "")
  const isActiveClass = isActive ? "is-active" : ""

  useEffect(() => {
    setFileName(file ? file.name : "")
  }, [file])

  const onChangeName = (e) => {
    setFileName(e.target.value)
  }

  const onSave = () => {
    save({
      id: file.id,
      name: fileName,
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
