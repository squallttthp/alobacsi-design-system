import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const json = JSON.parse(await readFile(resolve(root, "src/design-tokens.json"), "utf8"));
const css = await readFile(resolve(root, "dist/tokens.css"), "utf8");
if (!json.primitive || !json.semantic || !json.component) throw new Error("Token layers missing");
for (const token of ["--ac-color-brand", "--ac-color-commercial", "--ac-font-sans"]) {
  if (!css.includes(token)) throw new Error(`Generated CSS missing ${token}`);
}
console.log("design token check passed");
