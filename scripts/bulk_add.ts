import { exec } from "child_process";
import axios from "axios";
import fs from "fs";

const SNAPSHOT_API = "https://hub.snapshot.page/api/";

interface Space {
  strategies: any[];
  plugins: any;
  filters: any;
  name: string;
  network: string; // '1', '56', etc
  members?: [];
  symbol: string;
  domain: string;
  about: string;
  twitter: string;
  private?: boolean;
  github: string;
}

const deadOrInvalidSpaces = [
  "FinNexus",
  "ForTube(Ethereum)",
  "GoldMining Token",
  "Percent",
  "QIAN(ETH)",
  "ROPETHEVOTE",
  "yearn.finance (archive)",
  "KAIJU",
  "OMG",
  "Evolution Land",
  "Yam Finance Signal",
  "BIOPset House of Representatives",
  "BeetsDAO",
  "Scoobi-doge",
];

function filterObject(obj: any, predicate: Function) {
  let result: Record<string, any> = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}

async function fetchAllSpaces(): Promise<Record<string, Space>> {
  return axios.get(`${SNAPSHOT_API}/spaces`).then((res) => {
    const spaces = res.data;

    return spaces;
  });
}

async function fetchMainnetSpaces() {
  const allSpaces = await fetchAllSpaces();

  const filtered = filterObject(allSpaces, (space: Space) => space.network === "1" && !space.private);

  return filtered;
}

function extractTokenAddress(space: Space): string | null {
  const strategyWithAddress = space.strategies.find(
    (strategy) => strategy.name === "erc20-balance-of" || strategy.name === "ctoken",
  );

  if (strategyWithAddress) {
    return strategyWithAddress.params.address;
  } else {
    console.log(space);
    return null;
  }
}

async function extractTokenAbi(tokenAddress: string | null) {
  if (!tokenAddress) {
    return;
  }

  const res = await axios.get(
    `https://api.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=${process.env.ETHERSCAN_API_TOKEN}`,
  );

  return res.data.result;
}

// workaround for Etherscan api request limit
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function run() {
  const allMainnetSpaces = await fetchMainnetSpaces();

  const withMembers = filterObject(allMainnetSpaces, (space: Space) => space.members && space.members.length > 4);

  const notDed = filterObject(withMembers, (space: Space) => !deadOrInvalidSpaces.includes(space.name));

  fs.writeFileSync("./allprotocols.json", JSON.stringify(withMembers));

  for (let i = 0; i < Object.keys(notDed).length; i++) {
    const key = Object.keys(notDed)[i];

    console.log("Writing: ", key);

    const tokenAddress = extractTokenAddress(notDed[key]);

    exec(`sh ./scripts/add_new_protocol.sh ${key} ${tokenAddress}`, (error, stdout, stderr) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });

    if (tokenAddress) {
      const tokenAbi = await extractTokenAbi(tokenAddress);

      fs.writeFileSync(`./protocols/${key}/contracts/token.json`, tokenAbi);
    }

    await delay(500); // workaround for Etherscan api request limit
  }
}

run();
