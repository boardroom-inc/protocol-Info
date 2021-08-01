import fs from "fs";
import mkdirp from "mkdirp";
import moment from "moment";
import protocolsInfo from "../protocolsInfoForScreener.json";
import { CalendarEvent, CalendarEvents, dateKeyFormat } from "../types";

let protocols = fs.readdirSync("./protocols");

protocols = protocols.filter((protocol) => protocol !== "__example");

const protocolInfo = protocols.map((protocol) => ({
  ...JSON.parse(fs.readFileSync(`./protocols/${protocol}/index.json`, "utf8")),
  folder: protocol,
}));

let calendarEvents: CalendarEvents = {};

for (let i = 0; i < protocols.length; i++) {
  const protocol = protocols[i];

  const protocolInfo = fs.readFileSync(`./protocols/${protocol}/index.json`, "utf8");
  const protocolInfoEvents = fs.readFileSync(`./protocols/${protocol}/events.json`, "utf8");
  const cname = JSON.parse(protocolInfo).cname;

  if (protocolInfoEvents) {
    const parsedProtocolInfoEvents = JSON.parse(protocolInfoEvents) as Record<string, CalendarEvent>;

    Object.values(parsedProtocolInfoEvents).map((event) => {
      const formattedEvent = {
        ...event,
        date: moment(event.date).unix() * 1000,
        protocolCname: cname,
      };

      if (calendarEvents[moment(event.date).format(dateKeyFormat)]) {
        calendarEvents[moment(event.date).format(dateKeyFormat)].push(formattedEvent);
      } else {
        calendarEvents[moment(event.date).format(dateKeyFormat)] = [formattedEvent];
      }
    });
  }
}

mkdirp.sync("./dist");
fs.copyFileSync("./types.ts", "./dist/types.ts");
fs.writeFileSync(
  "./dist/index.ts",
  `
  import { CalendarEvents, Protocol, ProtocolForScreeener } from "../types";

  const protocolInfoList = ${JSON.stringify(protocolInfo)} as Protocol[];
  const protocolEvents = ${JSON.stringify(calendarEvents)} as CalendarEvents;
  const protocolsInfoForScreener: Record<string, ProtocolForScreeener> = ${JSON.stringify(protocolsInfo)};
  export {protocolInfoList, protocolEvents, protocolsInfoForScreener};
  `,
);
