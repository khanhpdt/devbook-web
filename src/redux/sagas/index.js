import { all } from "redux-saga/effects"
import fileListSagas from "./fileList"
import fileViewSagas from "./fileView"
import fileEditModalSagas from "./fileEditModal"

export default function* rootSaga() {
  yield all([...fileListSagas(), ...fileViewSagas(), ...fileEditModalSagas()])
}
