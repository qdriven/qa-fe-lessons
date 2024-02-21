import * as dotenv from "dotenv";
import { DEFAULT_PORT } from "./types";

dotenv.config();
console.log("start get env variables, current port is ", process.env.PORT);

export const port = process.env.PORT || DEFAULT_PORT;
