import { GET_SUGGESTIONS_SUCCESS } from "../actions/tagAutoSuggestActions"

const initialState = {
  suggestions: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTIONS_SUCCESS: {
      return {
        ...state,
        suggestions: action.payload.suggestions,
      }
    }
    default:
      return state
  }
}
