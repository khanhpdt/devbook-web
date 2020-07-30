import { call, put, takeLatest } from "redux-saga/effects"
import * as tagApi from "../../api/tagApi"
import {
  GET_SUGGESTIONS,
  getSuggestionsFailed,
  getSuggestionsSuccess,
} from "../actions/tagAutoSuggestActions"

function* getSuggestions() {
  try {
    const res = yield call(tagApi.getTagSuggestions)
    yield put(getSuggestionsSuccess(res.data.list))
  } catch (err) {
    yield put(getSuggestionsFailed())
  }
}

function* watchGetSuggestions() {
  yield takeLatest(GET_SUGGESTIONS, getSuggestions)
}

export default function tagAutoSuggestSagas() {
  return [watchGetSuggestions()]
}
