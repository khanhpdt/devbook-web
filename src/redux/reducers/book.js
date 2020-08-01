import { ON_START_SUCCESS, DOWNLOAD_BOOK_SUCCESS } from "../actions/book"

const initialState = {
  book: {
    id: null,
  },
  fileRawContent: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_START_SUCCESS: {
      const p = action.payload
      return Object.assign({}, state, {
        book: p,
      })
    }
    case DOWNLOAD_BOOK_SUCCESS: {
      const p = action.payload
      return Object.assign({}, state, {
        fileRawContent: p,
      })
    }
    default:
      return state
  }
}
