import { connect } from "react-redux"
import { onStart, downloadFile } from "../../redux/actions/fileView"
import FileView from "./component"

const mapStateToProps = (state) => ({
  file: state.fileView.file,
  fileRawContent: state.fileView.fileRawContent,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: (id) => dispatch(onStart(id)),
  downloadFile: (id) => dispatch(downloadFile(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FileView)
