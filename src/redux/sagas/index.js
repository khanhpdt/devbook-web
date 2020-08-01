import { all } from "redux-saga/effects"

import bookListSagas from "./bookList"
import bookSagas from "./book"
import bookEditSagas from "./bookEdit"
import tagAutoSuggestSagas from "./tagAutoSuggest"

export default function* rootSaga() {
  yield all([...bookListSagas(), ...bookSagas(), ...bookEditSagas(), ...tagAutoSuggestSagas()])
}
