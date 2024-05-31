import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

//reader to read files in configuration
export const reader = createReader(process.cwd(), keystaticConfig);

