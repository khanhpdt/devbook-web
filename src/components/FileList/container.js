import { connect } from "react-redux"
import { onStart, deleteFile } from "../../redux/actions/fileList"
import FileList from "./component"

const mapStateToProps = (state) => ({
  files: state.fileList.files,
  nPages: state.fileList.nPages,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: () => dispatch(onStart()),
  onDeleteFile: (fileId) => dispatch(deleteFile(fileId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FileList)
