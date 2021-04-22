import axios from "axios";

const SNAPSHOT_API = "https://hub.snapshot.page/api/";

interface Space {
  strategies: any[];
  plugins: any;
  filters: any;
  name: string;
  network: string; // '1', '56', etc
  symbol: string;
  domain: string;
  about: string;
  twitter: string;
  github: string;
}

function filterObject(obj: any, predicate: Function) {
  let result: Record<string, any> = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
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

  const filtered = filterObject(allSpaces, (space: Space) => space.network !== "1");

  return filtered;
}

fetchMainnetSpaces();

// async function run() {

// }
