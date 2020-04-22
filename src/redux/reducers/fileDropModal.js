import { CLICK_UPLOAD } from "../actions/navBarActions"
import { CLOSE } from "../actions/fileDropModalActions"

const initialState = {
  isActive: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CLICK_UPLOAD:
      return {
        ...state,
        isActive: true,
      }
    case CLOSE: {
      return {
        ...state,
        isActive: false,
      }
    }
    default:
      return state
  }
}
