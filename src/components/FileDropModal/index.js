import { connect } from "react-redux"
import FileDropModal from "./component"

const mapStateToProps = (state) => {
  return {
    isActive: state.fileDropModal.isActive,
  }
}

export default connect(mapStateToProps, null)(FileDropModal)
