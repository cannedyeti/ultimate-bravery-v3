export const getRiotData = async () => {
  const data = await fetch(
    "https://ultimate-bravery-v3-data.s3.us-west-2.amazonaws.com/data.json"
  ).then((x) => x.json());
  return data;
};
