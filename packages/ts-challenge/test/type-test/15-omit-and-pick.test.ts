/* eslint-disable @typescript-eslint/no-unused-vars */
import { Equal, Expect } from "../../src/type-utils";
import { expect, it, test } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, "id">;
type MyTypePick = Pick<User, "firstName" | "lastName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
it("get the pick/omit type", () => {
  console.log("todo, how to get type ");
  //ToDo Check types
});
