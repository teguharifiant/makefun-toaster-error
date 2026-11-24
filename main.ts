// The Funniest Toaster Error Message
// Entry for make.fun bounty u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes one original line (<= 120 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "ERROR E12: The bread has unionised. Negotiations have broken down.";

// Validates the kit gate for the entry text before anything is written:
// 1–120 characters counting code points, not only whitespace, exactly one
// line (no \n or \r). Throws with a clear message if the gate fails.
function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 120) {
    throw new Error(
      `Entry must be 1-120 characters, got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be exactly one line (no newline characters).");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
