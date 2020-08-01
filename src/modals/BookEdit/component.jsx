import React, { useEffect, useState } from "react"
import TagAutoSuggest from "../../components/TagAutoSuggest/container"

export default function BookEditModal({ close, save, isActive, book }) {
  const [bookTitle, setBookTitle] = useState("")
  const [tags, setTags] = useState([])
  const isActiveClass = isActive ? "is-active" : ""

  useEffect(() => {
    if (book) {
      setBookTitle(book.title)
      setTags(book.tags ? book.tags : [])
    }
  }, [book])

  const onChangeTitle = (e) => {
    setBookTitle(e.target.value)
  }

  const onSave = () => {
    save({
      id: book.id,
      title: bookTitle,
      tags: tags,
    })
  }

  return (
    <div className={"modal " + isActiveClass}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit book</p>
          <button className="delete" aria-label="close" onClick={() => close()} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={bookTitle}
                onChange={(e) => onChangeTitle(e)}
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
