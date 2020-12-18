import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { format } from "prettier";

const texDir = "tex";
const patternDir = "patterns";

type Group = "none" | "patterns" | "hyphenation";

for (const texFile of readdirSync(texDir).filter(
  (f) => f.endsWith(".tex") && f.startsWith("hyph-"),
)) {
  // TODO: fix files with \import
  if (texFile === "hyph-nb.tex" || texFile === "hyph-nn.tex") continue;
  const texFileContent = readFileSync(join(texDir, texFile), "utf-8");
  const targetFile = join(patternDir, `${texFile.slice(5, -4)}.ts`);
  // eslint-disable-next-line no-console
  console.log(texFile, texFileContent.length, targetFile);

  const out: string[] = [];
  let lastGroup: Group = "none";
  let patternsFound = false;
  let hyphenationFound = false;

  const enterGroup = (group: Group): void => {
    if (lastGroup !== "none") out.push("];");
    lastGroup = group;
  };

  for (const texLine of texFileContent.split("\n").map((l) => l.trim())) {
    if (texLine.startsWith("%")) {
      out.push(`// ${texLine.slice(1)}`);
    } else if (texLine.startsWith("\\patterns{")) {
      enterGroup("patterns");
      out.push("export const patterns = [");
      patternsFound = true;
    } else if (texLine.startsWith("\\hyphenation{")) {
      enterGroup("hyphenation");
      out.push("export const exceptions = [");
      hyphenationFound = true;
    } else if (texLine === "}") {
      enterGroup("none");
    } else if (!texLine.startsWith("\\") && lastGroup !== "none") {
      for (const pattern of texLine.split(" ")) {
        out.push(`  ${JSON.stringify(pattern)},`);
      }
    } else if (
      texLine === "" ||
      texLine.startsWith("\\message{") ||
      texLine.startsWith("\\endinput")
    ) {
      // pass
    } else {
      throw new Error(`unhandled tex line: ${texLine}`);
    }
  }
  enterGroup("none");
  if (!patternsFound) {
    out.push("export const patterns = [];");
  }
  if (!hyphenationFound) {
    out.push("export const exceptions = [];");
  }

  out.push("export default {");
  out.push("  patterns,");
  out.push("  exceptions,");
  out.push("}");

  writeFileSync(targetFile, format(out.join("\n"), { parser: "babel" }));
}
