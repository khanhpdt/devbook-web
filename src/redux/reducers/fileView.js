import { ON_START_SUCCESS } from "../actions/fileView"

const initialState = {
  file: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_START_SUCCESS:
      const p = action.payload
      return Object.assign({}, state, {
        file: p,
      })
    default:
      return state
  }
}
