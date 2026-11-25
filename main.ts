import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My first boss, Pak Dedi, watched me rewrite the same report for the third time and said, \"Nobody grades the draft — ship it, then fix only what people actually complain about.\"";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry length ${entry.length} is outside 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
