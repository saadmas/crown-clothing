import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
