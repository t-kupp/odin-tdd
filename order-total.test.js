const orderTotal = require("./order-total");

it("Quantity", () => {
  expect(
    orderTotal({
      items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
    })
  ).toBe(6);
});
