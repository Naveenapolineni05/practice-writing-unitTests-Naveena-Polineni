// tests/cart.test.js
const { addItem, removeItem, getTotalItems } = require("./cart");

describe("Shopping Cart Module", () => {
  let cart;

  beforeEach(() => {
    cart = [];
  });

  // addItem tests
  test("should add a valid item", () => {
    addItem(cart, "Apple", 3);
    expect(cart).toEqual([{ item: "Apple", quantity: 3 }]);
  });

  test("should not add item with negative quantity", () => {
    addItem(cart, "Banana", -2);
    expect(cart).toEqual([]);
  });

  test("should not add item with zero quantity", () => {
    addItem(cart, "Orange", 0);
    expect(cart).toEqual([]);
  });

  // removeItem tests
  test("should remove an existing item", () => {
    addItem(cart, "Milk", 2);
    removeItem(cart, "Milk");
    expect(cart).toEqual([]);
  });

  test("should do nothing if removing non-existent item", () => {
    addItem(cart, "Bread", 1);
    removeItem(cart, "Eggs");
    expect(cart).toEqual([{ item: "Bread", quantity: 1 }]);
  });

  test("should remove last item from cart", () => {
    addItem(cart, "Juice", 1);
    removeItem(cart, "Juice");
    expect(cart.length).toBe(0);
  });

  // getTotalItems tests
  test("should return total number of items correctly", () => {
    addItem(cart, "Pen", 2);
    addItem(cart, "Book", 3);
    expect(getTotalItems(cart)).toBe(5);
  });

  test("should return 0 for empty cart", () => {
    expect(getTotalItems(cart)).toBe(0);
  });

  test("should handle large quantities", () => {
    addItem(cart, "Notebook", 1000);
    expect(getTotalItems(cart)).toBe(1000);
  });
});
