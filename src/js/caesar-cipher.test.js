import caesarCipher from "./caesar-cipher";

test('input: "test", 7 should return "alza"', () => {
  expect(caesarCipher("test", 7)).toBe("alza");
});

test('input: "xyz", 4 should return "bcd"', () => {
  expect(caesarCipher("xyz", 4)).toBe("bcd");
});

test('input: "!5%öäå", 6 should return "!5%öäå"', () => {
  expect(caesarCipher("!5%öäå", 6)).toBe("!5%öäå");
});

test('input: "JuLiUs.1000!CaEsAr", 8 should return RcTqCa.1000!KiMaIz', () => {
  expect(caesarCipher("JuLiUs.1000!CaEsAr", 8)).toBe("RcTqCa.1000!KiMaIz");
});

test('input " 12 white space ! ", 11 should return " 12 hstep dalnp ! "', () => {
  expect(caesarCipher(" 12 white space ! ", 11)).toBe(" 12 hstep dalnp ! ");
});

test('input: "caesar", "string!@#$" should return an error', () => {
  expect(caesarCipher("caesar", "string!@#$")).toBe("Invalid arguments.");
});

test("empty arguments should return an error", () => {
  expect(caesarCipher()).toBe("Invalid arguments.");
});
