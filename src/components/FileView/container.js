import { connect } from "react-redux"
import { onStart } from "../../redux/actions/fileView"
import FileView from "./component"

const mapStateToProps = (state) => ({
  file: state.fileView.file,
})

const mapDispatchToProps = (dispatch) => ({
  onStart: (id) => dispatch(onStart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FileView)
