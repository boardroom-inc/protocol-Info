import { validator } from "io-ts-validator";
import { ProtocolIo } from "../types";
import protocols from "../dist";

for (const protocol of protocols) {
  validator(ProtocolIo).decodeSync(protocol);
}
