import { ON_START_SUCCESS, DOWNLOAD_FILE_SUCCESS } from "../actions/fileView"

const initialState = {
  file: {
    id: null,
  },
  fileRawContent: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_START_SUCCESS: {
      const p = action.payload
      return Object.assign({}, state, {
        file: p,
      })
    }
    case DOWNLOAD_FILE_SUCCESS: {
      const p = action.payload
      return Object.assign({}, state, {
        fileRawContent: p,
      })
    }
    default:
      return state
  }
}
