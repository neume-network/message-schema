// @format
import test from "ava";

import * as schema from "../src/index.mjs";

test("if schema is usable", (t) => {
  t.is(typeof schema, "object");
});
