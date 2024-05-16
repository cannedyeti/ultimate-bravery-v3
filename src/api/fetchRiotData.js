export const CHAMPION_IMAGE_BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/";

export const getRiotData = async () => {
  const data = await fetch(
    "https://ultimate-bravery-v3-data.s3.us-west-2.amazonaws.com/data.json"
  ).then((x) => x.json());
  return data;
};
