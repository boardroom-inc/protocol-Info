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
  github: string;
}

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

  const filtered = filterObject(allSpaces, (space: Space) => space.network === "1");

  return filtered;
}

function extractTokenAddress(space: Space): string | null {
  const strategyWithAddress = space.strategies.find((strategy) => strategy.name === "erc20-balance-of");

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

  return res.data.result;
}

async function run() {
  const allMainnetSpaces = await fetchMainnetSpaces();

  // console.log(Object.keys(allMainnetSpaces).length);

  const withMembers = filterObject(allMainnetSpaces, (space: Space) => space.members && space.members.length > 4);

  // console.log(Object.keys(withMembers).length);

  fs.writeFileSync("./allprotocols.json", JSON.stringify(withMembers));

  // for (let i = 0; i < Object.keys(withMembers).length; i++) {
  for (let i = 0; i < 2; i++) {
    const key = Object.keys(withMembers)[i];

    const tokenAddress = extractTokenAddress(withMembers[key]);

    const myShellScript = exec(`sh ./scripts/add_new_protocol.sh ${key}`, (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);

      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });

    console.log(myShellScript);

    const tokenAbi = await extractTokenAbi(tokenAddress);

    fs.writeFileSync(`./protocols/${key}/contracts/token.json`, JSON.stringify(tokenAbi));
  }
}

run();
