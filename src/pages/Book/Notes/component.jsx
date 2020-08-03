import React from "react"

import "./component.scss"

export default function Notes() {
  const onClickEdit = () => {
    console.log("Click edit")
  }

  return (
    <div className="title-container">
      <div className="mr-4">
        <h5 className="title is-5">Note</h5>
      </div>

      <div>
        <div>
          <button className="button" onClick={() => onClickEdit()}>
            <span className="icon is-small">
              <i className="fas fa-edit" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
