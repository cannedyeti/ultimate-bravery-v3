const RIOT_VERSION_API =
  "https://ddragon.leagueoflegends.com/api/versions.json";
const getChampDataApi = (version) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
const getItemDataApi = (version) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`;

const fetchLeagueVersion = async () => {
  const res = await fetch(RIOT_VERSION_API);
  const versionJson = await res.json();
  return versionJson[0];
};

const fetchLeagueData = async () => {
  let riotData = {};
  const version = await fetchLeagueVersion();
  riotData.version = version;

  const champData = await fetch(getChampDataApi(version)).then((res) =>
    res.json()
  );
  riotData.champions = champData?.data;

  const itemData = await fetch(getItemDataApi(version)).then((res) =>
    res.json()
  );
  riotData.items = itemData?.data;

  console.log({ riotData });
};

export function FetchData() {
  return (
    <>
      <h2>Fetch data</h2>
      <button onClick={fetchLeagueData}>Click this shit</button>
    </>
  );
}
