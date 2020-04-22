import { connect } from "react-redux"
import NavBar from "./component"
import { clickUpload } from "../../redux/actions/navBarActions"

const mapDispatchToProps = (dispatch) => {
  return {
    onClickUpload: () => dispatch(clickUpload()),
  }
}

export default connect(null, mapDispatchToProps)(NavBar)
