import { connect } from "react-redux"
import FileDropModal from "./component"
import { close } from "../../redux/actions/fileDropModalActions"

const mapStateToProps = (state) => {
  return {
    isActive: state.fileDropModal.isActive,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(close()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileDropModal)
