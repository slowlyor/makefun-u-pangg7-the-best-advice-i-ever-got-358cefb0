// The Best Advice I Ever Got — make.fun entry.
// Writes one sentence (<= 200 chars) to /output/entry.txt.
// Deterministic, stdlib only, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My grandfather said never trust a man who is rude to a waiter, and in forty years of watching people, he has never once been wrong.";

// Gate: 1-200 characters, single line, not only whitespace.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${SENTENCE.length}`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (SENTENCE !== SENTENCE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
console.log(`wrote ${SENTENCE.length} characters to /output/entry.txt`);
