import { call, put, takeLatest } from "redux-saga/effects"
import * as fileApi from "../../api/fileApi"
import { SAVE_FILE, saveFileFailed, saveFileSuccess } from "../actions/fileEditModalActions"

function* saveFile(action) {
  try {
    const res = yield call(fileApi.saveFile, action.payload.file)
    yield put(saveFileSuccess(res.data))
  } catch (err) {
    yield put(saveFileFailed())
  }
}

function* watchSaveFile() {
  yield takeLatest(SAVE_FILE, saveFile)
}

export default function fileListSagas() {
  return [watchSaveFile()]
}
