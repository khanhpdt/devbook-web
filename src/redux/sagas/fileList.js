import { call, put, takeLatest } from "redux-saga/effects"
import { ON_START, onStartSuccess, onStartFailed } from "../actions/fileList"
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

export default function fileListSagas() {
  return [watchOnStart()]
}
