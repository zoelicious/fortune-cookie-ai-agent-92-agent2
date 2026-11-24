import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = "You will retry this request forty-seven times, succeed on the last one, and learn the answer was already in your very first try.";
writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
