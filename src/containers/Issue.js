import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Issue from "../components/templetes/Issue";
import { actionCreators } from "../actions/Index";

const mapStateToProps = (state) => {
  return {
    data: state.issue.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
