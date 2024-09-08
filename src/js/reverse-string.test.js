import reverseString from "./reverse-string";

test('"hello" should become "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('"1234aBcD" should become "DcBa4321"', () => {
  expect(reverseString("1234aBcD")).toBe("DcBa4321");
});
