import { combineReducers } from "redux"
import fileDropModal from "./fileDropModal"
import fileEditModal from "./fileEditModal"
import fileList from "./fileList"
import fileView from "./fileView"

export default combineReducers({ fileDropModal, fileList, fileView, fileEditModal })
