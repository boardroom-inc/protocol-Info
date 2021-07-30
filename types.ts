import * as t from "io-ts";

export const ProtocolIo = t.type({
  cname: t.string,
  description: t.string,
  path: t.string,
  previousPaths: t.union([t.array(t.string), t.undefined]),
  folder: t.string,
  type: t.union([t.literal("snapshot"), t.literal("compoundish"), t.literal("others")]),
  isEnabled: t.boolean,
  discourseForum: t.union([
    t.partial({
      url: t.string,
      categoryId: t.string,
    }),
    t.undefined,
  ]),
  safeAddress: t.union([t.string, t.undefined]),
  treasuryAddresses: t.union([t.array(t.string), t.undefined]),
  disableTreasuryNav: t.union([t.boolean, t.undefined]),
});

export const ProtocolEvents = t.type({
  title: t.string,
  date: t.string,
  url: t.string,
  type: t.string,
  protocol: ProtocolIo,
});

export const ProtocolForScreeenerIo = t.type({
  name: t.string,
  cname: t.string,
  treasuryAddresses: t.array(t.string),
});

export type ProtocolForScreeener = t.TypeOf<typeof ProtocolForScreeenerIo>;

export type Protocol = t.TypeOf<typeof ProtocolIo>;
export type CalendarEvents = t.TypeOf<typeof ProtocolEvents>;
