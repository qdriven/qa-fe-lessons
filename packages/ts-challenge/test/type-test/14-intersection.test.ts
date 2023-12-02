import { expect, it, test } from "vitest";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
it("get the pick/omit type", () => {
  console.log("todo, how to get type ");
  //ToDo Check types
});
