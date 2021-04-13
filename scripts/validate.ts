import { validator } from "io-ts-validator";
import { ProtocolIo } from "../types";
import protocols from "../dist";

const errors = [];

for (const protocol of protocols) {
  try {
    validator(ProtocolIo).decodeSync(protocol);
  } catch (e) {
    errors.push({
      protocol: protocol.name,
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
  ""
);

if (errorMessage) {
  throw new Error(errorMessage);
}
