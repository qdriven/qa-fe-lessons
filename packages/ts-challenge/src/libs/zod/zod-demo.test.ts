import { expect, it } from "vitest";
import { stringSchemaFunc, objectSchemaFunc } from "./zod-demos";

it("test zod string schema", () => {
  stringSchemaFunc();
  expect(1).toEqual(1);
});

it("test zod object schema", () => {
  objectSchemaFunc();
  expect(1).toEqual(1);
});
