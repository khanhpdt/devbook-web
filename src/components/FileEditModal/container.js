import { connect } from "react-redux"
import FileEditModal from "./component"
import { close } from "../../redux/actions/fileEditModalActions"

const mapStateToProps = (state) => {
  return {
    isActive: state.fileEditModal.isActive,
    file: state.fileEditModal.file,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(close()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileEditModal)
