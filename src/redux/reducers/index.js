import { combineReducers } from "redux"
import fileDropModal from "./fileDropModal"
import bookEdit from "./bookEdit"
import bookList from "./bookList"
import book from "./book"
import tagAutoSuggest from "./tagAutoSuggest"

export default combineReducers({
  bookList,
  book,
  bookEdit,
  fileDropModal,
  tagAutoSuggest,
})
