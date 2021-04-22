const SNAPSHOT_API = "https://hub.snapshot.page/api/";

async function fetchAllSpaces() {
  const spaces = fetch(`${SNAPSHOT_API}/spaces`).then((res) => {
    console.log("res => ", res);
    return res.body;
  });
}
