import React from "react";
import { connect } from "react-redux";
import "./CheckoutItem.scss";
import {
  addItem,
  removeItem,
  removeWholeItem
} from "../../redux/cart/cartActions";

const CheckoutItem = ({ item, addItem, removeItem, removeWholeItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeWholeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    removeWholeItem: item => dispatch(removeWholeItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
