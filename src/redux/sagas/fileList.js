import { call, put, takeLatest } from "redux-saga/effects"
import {
  DELETE_FILE,
  deleteFileFailed,
  deleteFileSuccess,
  ON_START,
  onStartFailed,
  onStartSuccess,
} from "../actions/fileList"
import * as fileApi from "../../api/fileApi"

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
    yield put(deleteFileSuccess(res.data))
  } catch (err) {
    yield put(deleteFileFailed())
  }
}

function* watchDeleteFile() {
  yield takeLatest(DELETE_FILE, deleteFile)
}

export default function fileListSagas() {
  return [watchOnStart(), watchDeleteFile()]
}
