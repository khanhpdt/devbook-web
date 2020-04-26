import { all } from "redux-saga/effects"
import fileListSagas from "./fileList"

export default function* rootSaga() {
  yield all([...fileListSagas()])
}
