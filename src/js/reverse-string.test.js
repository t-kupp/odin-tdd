const reverseString = require("./reverse-string");

test('"hello" should become "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});
