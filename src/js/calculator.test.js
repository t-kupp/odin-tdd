import calculator from "./calculator";

test('"5 + 8 should be 13"', () => {
  expect(calculator.add(5, 8)).toBe(13);
});

test('"9 - 2 should be 7"', () => {
  expect(calculator.subtract(9, 2)).toBe(7);
});

test('"3 * 10 should be 30"', () => {
  expect(calculator.multiply(3, 10)).toBe(30);
});

test('"55 / 10 should be 5.5"', () => {
  expect(calculator.divide(55, 10)).toBe(5.5);
});

test('"Invalid arguments should return an error"', () => {
  expect(calculator.add("String" + 10)).toBe("Arguments are invalid.");
});

test('"Empty arguments should return an error"', () => {
  expect(calculator.add()).toBe("Arguments are invalid.");
});
