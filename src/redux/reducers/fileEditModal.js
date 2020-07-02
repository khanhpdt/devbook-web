import { CLOSE, OPEN } from "../actions/fileEditModalActions"

const initialState = {
  isActive: false,
  file: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CLOSE: {
      return {
        ...state,
        isActive: false,
      }
    }
    case OPEN: {
      return {
        ...state,
        isActive: true,
        file: action.payload.file,
      }
    }
    default:
      return state
  }
}
