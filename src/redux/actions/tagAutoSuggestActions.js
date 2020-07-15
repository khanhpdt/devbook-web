export const GET_SUGGESTIONS = "tagAutoSuggest/getSuggestions"
export const getSuggestions = () => ({
  type: GET_SUGGESTIONS,
})

export const GET_SUGGESTIONS_SUCCESS = "tagAutoSuggest/getSuggestionsSuccess"
export const getSuggestionsSuccess = (suggestions) => ({
  type: GET_SUGGESTIONS_SUCCESS,
  payload: { suggestions },
})

export const GET_SUGGESTIONS_FAILED = "tagAutoSuggest/getSuggestionsFailed"
export const getSuggestionsFailed = () => ({
  type: GET_SUGGESTIONS_FAILED,
})
