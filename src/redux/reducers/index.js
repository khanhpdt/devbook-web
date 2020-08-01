import { combineReducers } from "redux"
import fileDropModal from "./fileDropModal"
import fileEditModal from "./fileEditModal"
import bookList from "./bookList"
import book from "./book"
import tagAutoSuggest from "./tagAutoSuggest"

export default combineReducers({
  bookList,
  book,
  fileDropModal,
  fileEditModal,
  tagAutoSuggest,
})
