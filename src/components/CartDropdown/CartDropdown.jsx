import React from 'react';
import Button from '../Button/Button';
import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
