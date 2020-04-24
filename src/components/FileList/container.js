import { connect } from "react-redux"
import { onStart } from "../../redux/actions/fileList"
import FileList from "./component"

const mapDispatchToProps = (dispatch) => ({
  onStart: () => dispatch(onStart()),
})

export default connect(null, mapDispatchToProps)(FileList)
