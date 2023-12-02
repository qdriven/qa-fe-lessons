import { expect, it } from "vitest";
type AddTwoNumbersArgs = {
  first: number;
  second: number;
};
interface IAddTwoNumbersArgs {
  first: number;
  second: number;
}
export const addTwoNumbers = params => {
  return params.first + params.second;
};

export const addTwoNumbersArgs = (params: {
  first: number;
  second: number;
}) => {
  return params.first + params.second;
};

export const addTwoNumbersType = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};
export const addTwoNumbersInterface = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
