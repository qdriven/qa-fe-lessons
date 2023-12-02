import { it, expect } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  // posts: Post[];
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};

it("test array object", () => {
  expect(defaultUser.posts[0].id).toEqual(1);
});
