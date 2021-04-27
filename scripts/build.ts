import fs from "fs";
import mkdirp from "mkdirp";

const protocols = fs.readdirSync("./protocols");

const protocolInfo = protocols.map((protocol) => fs.readFileSync(`./protocols/${protocol}/index.json`, "utf8"));

mkdirp.sync("./dist");
fs.copyFileSync("./types.ts", "./dist/types.ts");
fs.writeFileSync(
  "./dist/index.ts",
  `
  import { Protocol } from "../types";
  export {
    Protocol
  }

  export default [${protocolInfo.toString()}] as Protocol[];
  `,
);
