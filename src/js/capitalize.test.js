import capitalize from "./capitalize";

test('"test" should become "Test', () => {
  expect(capitalize("test")).toBe("Test");
});

test('"Test" should become "Test', () => {
  expect(capitalize("test")).toBe("Test");
});

test('"TEST" should become "TEST', () => {
  expect(capitalize("TEST")).toBe("TEST");
});

test('"1234" should become "1234"', () => {
  expect(capitalize("1234")).toBe("1234");
});

test('"@!#$1234Hello" should become "@!#$1234Hello"', () => {
  expect(capitalize("@!#$1234Hello")).toBe("@!#$1234Hello");
});

test('" whitespace" should become "Whitespace"', () => {
  expect(capitalize(" whitespace")).toBe("Whitespace");
});

test('"two words!" should become "Two words!"', () => {
  expect(capitalize("two words!")).toBe("Two words!");
});
