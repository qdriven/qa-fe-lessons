import { it, expect } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  //   role: string;
  role: "admin" | "user" | "super-admin";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  //   role: "I_SHOULD_NOT_BE_ALLOWED",
  role: "admin",
};

it("test unions string", () => {
  expect(defaultUser.role).toEqual("admin");
});
