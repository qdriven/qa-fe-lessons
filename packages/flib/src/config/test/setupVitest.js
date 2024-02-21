"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const jestCompatOverride = {
  fn: vitest_1.vi.fn,
  spyOn: vitest_1.vi.spyOn,
};
global.jest = jestCompatOverride;
