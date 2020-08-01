import { CLOSE, OPEN } from "../actions/bookEdit"

const initialState = {
  isActive: false,
  book: null,
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
        book: action.payload.book,
      }
    }
    default:
      return state
  }
}
