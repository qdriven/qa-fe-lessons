import { describe, expect, it } from "vitest";
import { port } from "../../src/config";
import * as dotenv from "dotenv";
import { DEFAULT_PORT } from "../../src/config/types";

describe("port should be", () => {
  it("exported", () => {
    dotenv.config();
    console.log("start get env variables, current port is ", process.env.PORT);
    console.log("current ort is ", port);
    expect("30001").toEqual(port);
  });
});
