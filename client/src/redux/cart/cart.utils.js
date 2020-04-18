export const addItemToCart = (cartItems, itemToAdd) => {
  const itemToAddExists = cartItems.find(item => item.id === itemToAdd.id);

  if (itemToAddExists) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemInCart = cartItems.find(item => item.id === itemToRemove.id);

  if (itemInCart && itemInCart.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  } else if (itemInCart) {
    return cartItems.map(item =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return [...cartItems];
};
