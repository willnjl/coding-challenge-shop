import { connect } from "react-redux";
import Footer from "./Footer";
import { restart } from "../../data/actions";
import history from "../../history";

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    history.push("/");
    dispatch(restart());
  },
});

export default connect(null, mapDispatchToProps)(Footer);
