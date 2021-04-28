import axios from "axios";
import { exec } from "child_process";
import dotenv from "dotenv";
import fs from "fs";

import manualProtocols from "../allprotocols.json";

dotenv.config();

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
  "Aave",
  "Alchemix",
  "UniDAO",
  "yAxis",
  "FinNexus",
  "Eggy.Finance",
  "Self Token",
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
  "Yam Finance",
  "BIOPset House of Representatives",
  "BIOPset",
  "BIOPsetHouse",
  "MarsFinance",
  "BeetsDAO",
  "Scoobi-doge",
  "GamyFi Governance",
  "Proof Of Humanity",
  "Strudel Finance",
  "BOTE LABS",
  "Aave",
  "CoFiX",
  "Shadowpakt",
  "SouthChain Digital Asset Network",
  "Gentlemen's Bank",
  "AngelDAO",
  "Index",
  "Compound Uniswap",
];

const handSelectedSpaces = ["Ampleforth", "BadgerDAO", "dHEDGE DAO"];

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

  return JSON.parse(res.data.result);
}

// workaround for Etherscan api request limit
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function createSkeletons(spaces: Record<string, any>) {
  for (let i = 0; i < Object.keys(spaces).length; i++) {
    const key = Object.keys(spaces)[i];

    console.log("Writing: ", key);

    const tokenAddress = extractTokenAddress(spaces[key]);
    const suffix = spaces[key].symbol;
    const name = spaces[key].name;

    const file = fs.readFileSync(`./protocols/${key}/index.json`);

    const fileAsJson: any = JSON.parse(file.toString());

    if (!fileAsJson.claim?.isClaimed) {
      exec(`sh ./scripts/add_new_protocol.sh ${key} ${tokenAddress} ${suffix} ${name}`, (error, stdout, stderr) => {
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      });

      if (tokenAddress) {
        const tokenAbi = await extractTokenAbi(tokenAddress);

        fs.writeFileSync(`./protocols/${key}/contracts/token.json`, JSON.stringify(tokenAbi));
      }

      await delay(1000); // workaround for Etherscan api request limit
    } else {
      console.log("Already claimed!");
    }
  }
}

async function run(argv: any) {
  const args = argv.slice(2);

  if (args[0] === "full") {
    const allMainnetSpaces = await fetchMainnetSpaces();

    const withMembers = filterObject(
      allMainnetSpaces,
      (space: Space) => handSelectedSpaces.includes(space.name) || (space.members && space.members.length > 3),
    );

    const notDed = filterObject(withMembers, (space: Space) => !deadOrInvalidSpaces.includes(space.name));

    fs.writeFileSync("./allprotocols.json", JSON.stringify(notDed));

    createSkeletons(notDed);
  } else if (args[0] === "semi") {
    createSkeletons(manualProtocols);
  }
}

run(process.argv);
