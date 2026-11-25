// Make the AI Judge Laugh — entry generator
// Node 22, standard library only. Deterministic: writes the same single
// joke line every run, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original line about office life.
const JOKE =
  "I booked a meeting with myself just to eat lunch, then showed up late and rescheduled it for tomorrow.";

// Gate: the entry must be 1-200 characters, a single line, not only
// whitespace. Anything outside that range is a hard failure.
if (JOKE.length < 1 || JOKE.length > 200) {
  console.error(`entry is ${JOKE.length} characters; must be 1-200`);
  process.exit(1);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  console.error("entry must be a single non-blank line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
