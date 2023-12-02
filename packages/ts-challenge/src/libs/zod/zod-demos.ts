import { z } from "zod";

export const stringSchemaFunc = () => {
  // creating a schema for strings
  const mySchema = z.string();

  // parsing
  mySchema.parse("tuna"); // => "tuna"
  //   mySchema.parse(12); // => throws ZodError

  // "safe" parsing (doesn't throw error if validation fails)
  mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
  mySchema.safeParse(12); // => { success: false; error: ZodError }
};

export const objectSchemaFunc = () => {
  const User = z.object({
    username: z.string(),
  });

  User.parse({ username: "Ludwig" });

  // extract the inferred type
  type User = z.infer<typeof User>;
  console.log(User);
  // { username: string }
};
