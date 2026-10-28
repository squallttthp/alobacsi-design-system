import { mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
await mkdir(resolve(root, "dist"), { recursive: true });
const css = await readFile(resolve(root, "dist/tokens.css"), "utf8");
if (!css.includes(":root") || !css.includes("--ac-color-brand")) {
  throw new Error("dist/tokens.css is not a valid generated runtime artifact");
}
console.log("tokens.css runtime artifact checked");
