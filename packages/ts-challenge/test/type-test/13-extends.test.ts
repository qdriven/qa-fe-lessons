/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, it } from "vitest";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
  id: string;
}

interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  title: string;
  body: string;
}

interface Comment extends Base {
  comment: string;
}

it("Should return the amount when passed a number", () => {
  expect(1).toBe(1);
  //ToDo Check types
});
