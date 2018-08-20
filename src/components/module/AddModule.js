import { connect } from "react-redux";
import { addModule } from "../../store/actions";
import NewModule from "../../components/module/NewModule";

const mapDispatchToProps = dispatch => {
  return {
    onAddModule: module => {
      dispatch(addModule(module));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewModule);
