import { validator } from "io-ts-validator";
import { ProtocolEvents, ProtocolIo } from "../types";
import { protocolEvents, protocolInfo } from "../dist";

const errors = [];

for (const protocol of protocolInfo) {
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
for (const event of protocolEvents) {
  try {
    validator(ProtocolEvents).decodeSync(event);
  } catch (e) {
    errors.push({
      protocol: event?.protocolCname || undefined,
      message: e,
    });
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
