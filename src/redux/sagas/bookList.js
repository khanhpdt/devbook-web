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
    const res = yield call(fileApi.fetchFiles)
    yield put(onStartSuccess(res.data))
  } catch (err) {
    yield put(onStartFailed())
  }
}

function* watchOnStart() {
  yield takeLatest(ON_START, onStart)
}

function* deleteFile(action) {
  try {
    const res = yield call(fileApi.deleteFile, action.payload)
    yield put(deleteBookSuccess(res.data))
  } catch (err) {
    yield put(deleteBookFailed())
  }
}

function* watchDeleteFile() {
  yield takeLatest(DELETE_BOOK, deleteFile)
}

export default function fileListSagas() {
  return [watchOnStart(), watchDeleteFile()]
}
