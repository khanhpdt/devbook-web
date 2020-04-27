import { connect } from "react-redux"
import { onStart } from "../../redux/actions/fileList"
import FileList from "./component"

const mapStateToProps = (state) => ({
  files: state.fileList.files,
  nPages: state.fileList.nPages,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: () => dispatch(onStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FileList)
