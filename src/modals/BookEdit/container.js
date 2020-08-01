import { connect } from "react-redux"
import BookEditModal from "./component"
import { close, saveBook } from "../../redux/actions/bookEdit"

const mapStateToProps = (state) => {
  return {
    isActive: state.bookEdit.isActive,
    book: state.bookEdit.book,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(close()),
    save: (f) => dispatch(saveBook(f)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEditModal)
