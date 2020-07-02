import { connect } from "react-redux"
import { downloadFile, onStart } from "../../redux/actions/fileView"
import { open } from "../../redux/actions/fileEditModalActions"
import FileView from "./component"

const mapStateToProps = (state) => ({
  file: state.fileView.file,
  fileRawContent: state.fileView.fileRawContent,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: (id) => dispatch(onStart(id)),
  downloadFile: (id) => dispatch(downloadFile(id)),
  onClickEdit: (file) => dispatch(open(file)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FileView)
