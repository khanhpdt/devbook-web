import { connect } from "react-redux"
import { downloadBook, onStart } from "../../redux/actions/book"
import { open } from "../../redux/actions/bookEdit"
import Book from "./component"

const mapStateToProps = (state) => ({
  book: state.book.book,
  fileRawContent: state.book.fileRawContent,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: (id) => dispatch(onStart(id)),
  downloadBook: (id) => dispatch(downloadBook(id)),
  onClickEdit: (file) => dispatch(open(file)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)
