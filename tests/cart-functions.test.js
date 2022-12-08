const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem } = require("../src/js/cart-functions");

  
describe("Returns the amount of change the payment minus the total", () => {
  test('When payment is 5 and total is 6 then change will be 1', () => {
   let change = calculateChange(6, 5)
    expect(change).toBe(1);
  });

  test('When payment is 13.03 and total is 12.3 than change will be 0.73', () => {
   const change = calculateChange(13.03, 12.32);
   expect(change).toBeCloseTo(0.73);
  });
  test('When payment is 18  and total is 12.36 than change will be 5.64', () => {
   const change = calculateChange(18, 12.36);
   expect(change).toBeCloseTo(5.64);
  });

  describe("isSufficientPayment", () => {
    test.todo("add isSufficientPayment tests here");
    expect(change).toBe(1);
  });

  describe("calculateTotal", () => {
    test.todo("add calculateTotal tests here");
    expect(change).toBe(1);
  });

  describe("addItem", () => {
    test.todo("add addItem tests here");
    expect(change).toBe(1);
  });

  describe("removeItem", () => {
    test.todo("add removeItem tests here");
    expect(change).toBe(1);
  }
};