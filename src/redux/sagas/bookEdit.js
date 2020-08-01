import { call, put, takeLatest } from "redux-saga/effects"
import * as bookApi from "../../api/bookApi"
import { SAVE_BOOK, saveBookFailed, saveBookSuccess } from "../actions/bookEdit"

function* saveBook(action) {
  try {
    const res = yield call(bookApi.saveBook, action.payload.book)
    yield put(saveBookSuccess(res.data))
  } catch (err) {
    yield put(saveBookFailed())
  }
}

function* watchSaveFile() {
  yield takeLatest(SAVE_BOOK, saveBook)
}

export default function bookEditSagas() {
  return [watchSaveFile()]
}
