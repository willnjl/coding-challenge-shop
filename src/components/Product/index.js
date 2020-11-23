import { connect } from "react-redux";
import Product from "./Product";
import { addToCart } from "../../data/actions";

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (id, quantity) => dispatch(addToCart(id, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
