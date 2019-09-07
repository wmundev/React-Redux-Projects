import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { getCartItems } from "../../redux/cart/cartSelectors";
import { toggleDropdownCart } from "../../redux/cart/cartActions";
import CartDropdown from "./index";

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems
});

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdownCart: () => dispatch(toggleDropdownCart())
  };
};

const CartDropdownContainer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CartDropdown);

export default CartDropdownContainer;
