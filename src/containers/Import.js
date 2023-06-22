import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes } from "../redux/actions";
import { deleteMakes } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMakes: (index) => dispatch(deleteMakes(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
