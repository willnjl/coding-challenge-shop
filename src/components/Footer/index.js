import { connect } from "react-redux";
import Footer from "./Footer";
import { restart } from "../../data/actions";

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(restart()),
});

export default connect(null, mapDispatchToProps)(Footer);
