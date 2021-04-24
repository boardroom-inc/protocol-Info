import * as t from "io-ts";
export declare const ProtocolIo: t.TypeC<{
    cname: t.StringC;
    name: t.StringC;
    description: t.StringC;
    path: t.StringC;
    previousPaths: t.UnionC<[t.ArrayC<t.StringC>, t.UndefinedC]>;
    folder: t.StringC;
    type: t.UnionC<[t.LiteralC<"snapshot">, t.LiteralC<"compoundish">]>;
    suffix: t.StringC;
    claim: t.TypeC<{
        isClaimed: t.BooleanC;
        claimer: t.StringC;
        signature: t.StringC;
    }>;
    coinGeckoPriceString: t.StringC;
    tokenContractAddress: t.StringC;
    governanceContractAddress: t.UnionC<[t.StringC, t.UndefinedC]>;
    isEnabled: t.BooleanC;
    hasOnchain: t.BooleanC;
    isHybrid: t.BooleanC;
    hasDelegation: t.BooleanC;
    snapshotSpaceName: t.UnionC<[t.StringC, t.UndefinedC]>;
    invalidSnapshots: t.UnionC<[t.ArrayC<t.StringC>, t.UndefinedC]>;
    branding: t.UnionC<[t.PartialC<{
        primaryColor: t.StringC;
        accentColor: t.StringC;
    }>, t.UndefinedC]>;
    discourseForum: t.UnionC<[t.PartialC<{
        url: t.StringC;
        categoryId: t.StringC;
    }>, t.UndefinedC]>;
    safeAddress: t.UnionC<[t.StringC, t.NullC]>;
}>;
export declare type Protocol = t.TypeOf<typeof ProtocolIo>;
