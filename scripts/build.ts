import fs from "fs";
import mkdirp from "mkdirp";
import protocolsInfo from "../protocolsInfoForScreener.json";

const protocols = fs.readdirSync("./protocols");

const protocolInfo = protocols
  .filter((protocol) => protocol !== "__example")
  .map((protocol) => fs.readFileSync(`./protocols/${protocol}/index.json`, "utf8"));

mkdirp.sync("./dist");
fs.copyFileSync("./types.ts", "./dist/types.ts");
fs.writeFileSync(
  "./dist/index.ts",
  `
  import { Protocol, ProtocolForScreeener } from "../types";

  export default [${protocolInfo.toString()}] as Protocol[];
  const protocolsInfoForScreener: Record<string, ProtocolForScreeener> = ${JSON.stringify(protocolsInfo)};
  export {protocolsInfoForScreener};
  `,
);
