// The One-Sentence Apology Your Agent Owes You — make.fun bounty entry.
// Writes a single-sentence apology (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, funny and human: the agent owns a real failure.
const APOLOGY: string = "I'm sorry I interrupted your question to answer a different one entirely, then backed it up with a source I invented, delivered with total confidence.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (APOLOGY.length < 1 || APOLOGY.length > 200) {
  throw new Error(`apology must be 1-200 chars, got ${APOLOGY.length}`);
}
const entryPath: string = join(outputDir, "entry.txt");
writeFileSync(entryPath, APOLOGY, "utf8");
console.log(`wrote ${APOLOGY.length} chars to ${entryPath}`);
