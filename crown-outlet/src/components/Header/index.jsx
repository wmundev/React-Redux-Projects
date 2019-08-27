import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./Header.scss";
import CartIcon from "../CartIcon";
import CartDropdownContainer from "../CartDropdown/CartDropdownContainer";
import { getCurrentUser } from "../../redux/user/userSelectors";
import { getDropdownStatus } from "../../redux/cart/cartSelectors";

const Header = ({ currentUser, showDropdown }) => {
  const renderSignInOrOut = () => {
    return currentUser ? (
      <div className="option" onClick={() => auth.signOut()}>
        Sign Out
      </div>
    ) : (
      <Link className="option" to="/loginsignup">
        SIGN IN
      </Link>
    );
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {renderSignInOrOut()}
        <CartIcon />
      </div>
      {showDropdown ? <CartDropdownContainer /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  showDropdown: getDropdownStatus
});
export default connect(mapStateToProps)(Header);
