import fs from "fs";
import mkdirp from "mkdirp";
import protocolsInfo from "../protocolsInfoForScreener.json";

const protocols = fs.readdirSync("./protocols");

const protocolInfo = protocols
  .filter((protocol) => protocol !== "__example")
  .map((protocol) => ({
    ...JSON.parse(fs.readFileSync(`./protocols/${protocol}/index.json`, "utf8")),
    folder: protocol,
  }));

const events = protocols
  .filter((protocol) => protocol !== "__example")
  .map((protocol) => {
    const fileEvents = fs.readFileSync(`./protocols/${protocol}/events.json`, "utf8");

    if (fileEvents) {
      return JSON.parse(fileEvents);
    } else {
      return {};
    }
  });

mkdirp.sync("./dist");
fs.copyFileSync("./types.ts", "./dist/types.ts");
fs.writeFileSync(
  "./dist/index.ts",
  `
  import { CalendarEvents, Protocol, ProtocolForScreeener } from "../types";

  export const protocolInfo = ${JSON.stringify(protocolInfo)} as Protocol[];
  export const protocolEvents = ${JSON.stringify(events)} as CalendarEvents[];
  const protocolsInfoForScreener: Record<string, ProtocolForScreeener> = ${JSON.stringify(protocolsInfo)};
  export {protocolsInfoForScreener};
  `,
);
