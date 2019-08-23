import React from 'react';
import Button from '../Button/Button';
import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
