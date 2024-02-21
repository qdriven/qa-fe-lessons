import { describe, expect, it } from "vitest";
import { one } from "../../src/demo";

describe("should test", () => {
  it("exported", () => {
    expect(1).toEqual(one);
  });
});
