// cart.js

function addItem(cart, item, quantity) {
  if (quantity <= 0) {
    console.log("Quantity must be greater than 0");
    return cart;
  }

  cart.push({ item, quantity });
  return cart;
}

function removeItem(cart, item) {
  const index = cart.findIndex(cartItem => cartItem.item === item);
  if (index === -1) {
    console.log("Item not found in cart");
    return cart;
  }

  cart.splice(index, 1);
  return cart;
}

function getTotalItems(cart) {
  if (!Array.isArray(cart) || cart.length === 0) return 0;

  return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

module.exports = { addItem, removeItem, getTotalItems };
