import { validator } from "io-ts-validator";
import { ProtocolEvents, ProtocolIo } from "../types";
import { protocolEvents, protocolInfoList } from "../dist";

const errors = [];

for (const protocol of protocolInfoList) {
  try {
    validator(ProtocolIo).decodeSync(protocol);
  } catch (e) {
    errors.push({
      protocol: protocol.cname,
      message: e,
    });
  }
}

// console.log("protocolEvents => ", protocolEvents);
for (const events of Object.values(protocolEvents)) {
  for (const event of events) {
    try {
      validator(ProtocolEvents).decodeSync(event);
    } catch (e) {
      errors.push({
        protocol: event?.protocolCname || undefined,
        message: e,
      });
    }
  }
}

const errorMessage = errors.reduce(
  (message, error) =>
    `
    ${message}\n
    Error validating protocol: ${error.protocol}\n
    ${error.message}
  `,
  "",
);

if (errorMessage) {
  throw new Error(errorMessage);
}
