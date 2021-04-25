"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolIo = void 0;
var t = __importStar(require("io-ts"));
exports.ProtocolIo = t.type({
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
});
