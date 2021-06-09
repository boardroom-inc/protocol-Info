import * as t from "io-ts";

export const ProtocolIo = t.type({
  cname: t.string,
  name: t.string,
  description: t.string,
  path: t.string,
  previousPaths: t.union([t.array(t.string), t.undefined]),
  folder: t.string,
  type: t.union([t.literal("snapshot"), t.literal("compoundish")]),
  suffix: t.string,
  claim: t.union([
    t.partial({
      isClaimed: t.boolean,
      claimer: t.string,
      signature: t.string,
    }),
    t.undefined,
  ]),
  coinGeckoPriceString: t.string,
  tokenContractAddress: t.string,
  governanceContractAddress: t.union([t.string, t.undefined]),
  isEnabled: t.boolean,
  hasOnchain: t.boolean,
  isHybrid: t.boolean,
  hasDelegation: t.boolean,
  snapshotSpaceName: t.union([t.string, t.undefined]),
  invalidSnapshots: t.union([t.array(t.string), t.undefined]),
  branding: t.union([
    t.partial({
      primaryColor: t.string,
      accentColor: t.string,
    }),
    t.undefined,
  ]),
  discourseForum: t.union([
    t.partial({
      url: t.string,
      categoryId: t.string,
    }),
    t.undefined,
  ]),
  safeAddress: t.union([t.string, t.null]),
  treasuryAddresses: t.union([t.array(t.string), t.undefined]),
});

export type Protocol = t.TypeOf<typeof ProtocolIo>;
