import { connect } from "react-redux"
import { onStart, deleteBook } from "../../../redux/actions/bookList"
import BookList from "./component"

const mapStateToProps = (state) => ({
  books: state.bookList.books,
  nPages: state.bookList.nPages,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: () => dispatch(onStart()),
  onDeleteBook: (bookId) => dispatch(deleteBook(bookId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
