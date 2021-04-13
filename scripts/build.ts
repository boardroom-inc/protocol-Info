import fs from "fs";
import mkdirp from "mkdirp";

const protocols = fs.readdirSync("./protocols");

const protocolInfo = protocols.map((protocol) =>
  fs.readFileSync(`./protocols/${protocol}/index.json`, "utf8")
);

mkdirp.sync("./dist");
fs.copyFileSync("./index.d.ts", "./dist/index.d.ts");
fs.copyFileSync("./types.ts", "./dist/types.ts");
fs.writeFileSync(
  "./dist/index.ts",
  `export default [${protocolInfo.toString()}];`
);
