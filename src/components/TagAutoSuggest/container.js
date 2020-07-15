import { connect } from "react-redux"
import TagAutoSuggest from "./component"
import { getSuggestions } from "../../redux/actions/tagAutoSuggestActions"

const mapStateToProps = (state) => {
  return {
    tagSuggestions: state.tagAutoSuggest.suggestions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTagSuggestions: () => dispatch(getSuggestions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagAutoSuggest)
