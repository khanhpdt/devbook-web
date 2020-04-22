import { CLICK_UPLOAD } from "../actions/navBarActions"

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
    default:
      return state
  }
}
