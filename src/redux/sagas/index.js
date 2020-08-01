import { all } from "redux-saga/effects"
import fileListSagas from "./bookList"
import fileViewSagas from "./book"
import fileEditModalSagas from "./fileEditModal"
import tagAutoSuggestSagas from "./tagAutoSuggest"

export default function* rootSaga() {
  yield all([
    ...fileListSagas(),
    ...fileViewSagas(),
    ...fileEditModalSagas(),
    ...tagAutoSuggestSagas(),
  ])
}
