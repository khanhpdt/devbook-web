import { call, put, takeLatest } from "redux-saga/effects"
import * as fileApi from "../../api/fileApi"
import {
  downloadFileFailed,
  downloadFileSuccess,
  DOWNLOAD_FILE,
  onStartFailed,
  onStartSuccess,
  ON_START,
} from "../actions/fileView"

function* onStart(action) {
  try {
    const res = yield call(fileApi.getFile, action.payload.fileId)
    yield put(onStartSuccess(res.data))
  } catch (err) {
    yield put(onStartFailed())
  }
}

function* watchOnStart() {
  yield takeLatest(ON_START, onStart)
}

function* downloadFile(action) {
  try {
    const res = yield call(fileApi.downloadFile, action.payload.fileId)
    yield put(downloadFileSuccess(res.data))
  } catch (err) {
    yield put(downloadFileFailed())
  }
}

function* watchdownloadFile() {
  yield takeLatest(DOWNLOAD_FILE, downloadFile)
}

export default function fileListSagas() {
  return [watchOnStart(), watchdownloadFile()]
}
