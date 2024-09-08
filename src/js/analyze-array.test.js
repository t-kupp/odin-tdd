import analyzeArray from "./analyze-array";

test("input [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("input []", () => {
  expect(analyzeArray([])).toBe("Invalid arguments.");
});

test('input "string"', () => {
  expect(analyzeArray("string")).toBe("Invalid arguments.");
});
