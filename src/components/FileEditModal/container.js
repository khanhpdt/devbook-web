import { connect } from "react-redux"
import FileEditModal from "./component"
import { close, saveFile } from "../../redux/actions/fileEditModalActions"

const mapStateToProps = (state) => {
  return {
    isActive: state.fileEditModal.isActive,
    file: state.fileEditModal.file,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(close()),
    save: (f) => dispatch(saveFile(f)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileEditModal)
