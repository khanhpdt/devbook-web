import { call, put, takeLatest } from "redux-saga/effects"
import { ON_START, onStartSuccess, onStartFailed } from "../actions/fileView"
import * as fileApi from "../../api/fileApi"

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

export default function fileListSagas() {
  return [watchOnStart()]
}
