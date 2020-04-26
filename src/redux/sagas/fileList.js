import { call, put, takeLatest } from "redux-saga/effects"
import { ON_START, onStartSuccess, onStartFailed } from "../actions/fileList"
import * as fileApi from "../../api/fileApi"

function* onStart() {
  try {
    yield call(fileApi.fetchFiles)
    yield put(onStartSuccess())
  } catch (err) {
    console.log("Error: " + err)
    yield put(onStartFailed())
  }
}

function* watchOnStart() {
  yield takeLatest(ON_START, onStart)
}

export default function fileListSagas() {
  return [watchOnStart()]
}
