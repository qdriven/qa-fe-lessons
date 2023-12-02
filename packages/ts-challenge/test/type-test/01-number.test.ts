import { it, expect } from "vitest";

export const addTwoNumbers = (a, b) => {
  return a + b;
};
export const addTwoNumbersTypes = (a: number, b: number) => {
  return a + b;
};

it("should add two number together more functions", () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
  expect(addTwoNumbersTypes(1, 2)).toBe(3);
});
