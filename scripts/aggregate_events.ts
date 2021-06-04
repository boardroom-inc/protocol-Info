/*
 *	Script to Aggregate the events for a protocol into a single events.json
 * 	for few necessary requests on consumer end to get all manualy inputted events.
 *
 * 	N.B. this script should run in CI in order to make sure the amalgated events is
 * 	always up to date, as we don't want community members to have to input their updates
 *  in more than one place.
 */

import fs from "fs";
import path from "path";

interface Event {
  title: string;
  protocol: string;
  url: string;
  date: string;
}

const directoryPath = path.join(__dirname, "../protocols");

function aggregateEvents() {
  // for each folder in ../src
  const files = fs.readdirSync(directoryPath);

  let allEvents: Event[] = [];

  files.forEach(function (filename) {
    // add a { protocol: cname } field for each entry
    if (filename !== "__example") {
      const file = fs.readFileSync(path.join(__dirname, `../protocols/${filename}/events.json`));

      try {
        const fileAsJson: any = JSON.parse(file.toString());

        const info = fs.readFileSync(path.join(__dirname, `../protocols/${filename}/index.json`));

        const cname = JSON.parse(info.toString()).cname;

        fileAsJson.map((event: any) => {
          event.protocol = cname;

          console.log(event);

          allEvents.push(event);
        });
      } catch (e) {
        console.log("no events");
      }
    }
  });

  fs.writeFileSync(path.join(__dirname, `../allEvents.json`), JSON.stringify(allEvents));
}

aggregateEvents();
