import { call, put, takeLatest } from "redux-saga/effects"
import * as bookApi from "../../api/bookApi"
import {
  downloadBookFailed,
  downloadBookSuccess,
  DOWNLOAD_BOOK,
  onStartFailed,
  onStartSuccess,
  ON_START,
} from "../actions/book"

function* onStart(action) {
  try {
    const res = yield call(bookApi.findBookById, action.payload.bookId)
    yield put(onStartSuccess(res.data))
  } catch (err) {
    yield put(onStartFailed())
  }
}

function* watchOnStart() {
  yield takeLatest(ON_START, onStart)
}

function* downloadBook(action) {
  try {
    const res = yield call(bookApi.downloadBook, action.payload.bookId)
    yield put(downloadBookSuccess(res.data))
  } catch (err) {
    yield put(downloadBookFailed())
  }
}

function* watchDownloadBook() {
  yield takeLatest(DOWNLOAD_BOOK, downloadBook)
}

export default function fileListSagas() {
  return [watchOnStart(), watchDownloadBook()]
}
