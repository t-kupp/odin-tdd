import caesarCipher from "./caesar-cipher";

test('"input: "test", 7 should return "alza""', () => {
  expect(caesarCipher("test", 7)).toBe("alza");
});

test('"input: "xyz", 4 should return "bcd""', () => {
  expect(caesarCipher("xyz", 4)).toBe("bcd");
});

test('"input: "!5%öäå", 6 should return an error', () => {
  expect(caesarCipher("!5%öäå", 6)).toBe(
    "Invalid arguments. First argument valid characters: a-z."
  );
});

test('"input: "caesar", "string!@#$" should return an error', () => {
  expect(caesarCipher("caesar", "string!@#$")).toBe(
    "Invalid arguments. Second argument needs to be a number."
  );
});

test("empty arguments should return an error", () => {
  expect(caesarCipher()).toBe("Invalid arguments. Second argument needs to be a number.");
});
