import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase";
import "./Header.scss";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
