import { call, put, takeLatest } from "redux-saga/effects"
import {
  DELETE_BOOK,
  deleteBookFailed,
  deleteBookSuccess,
  ON_START,
  onStartFailed,
  onStartSuccess,
} from "../actions/bookList"
import * as fileApi from "../../api/bookApi"

function* onStart() {
  try {
    const res = yield call(fileApi.findBooks)
    yield put(onStartSuccess(res.data))
  } catch (err) {
    yield put(onStartFailed())
  }
}

function* watchOnStart() {
  yield takeLatest(ON_START, onStart)
}

function* deleteBook(action) {
  try {
    const res = yield call(fileApi.deleteBook, action.payload)
    yield put(deleteBookSuccess(res.data))
  } catch (err) {
    yield put(deleteBookFailed())
  }
}

function* watchDeleteBook() {
  yield takeLatest(DELETE_BOOK, deleteBook)
}

export default function bookListSagas() {
  return [watchOnStart(), watchDeleteBook()]
}
