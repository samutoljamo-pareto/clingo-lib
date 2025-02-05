const clingo = require("../lib");
const path = require("path");
const fs = require("fs");

async function test() {
  try {
    const lp = path.resolve(__dirname, "simple.lp");

    const result = await clingo.solve({
      files: [lp],
    });
  } catch (error) {
    console.error("Error:", error.message);
    console.error("Stack:", error.stack);
  }
}

test();
