import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Profile from "../components/templetes/Profile";
import { actionCreators } from "../actions/Index";

const mapStateToProps = (state) => {
  return {
    user: state.profile.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
