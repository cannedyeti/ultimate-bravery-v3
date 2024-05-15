import { Button } from "@chakra-ui/react";

const getData = async () => {
  const data = await fetch(
    "https://ultimate-bravery-v3-data.s3.us-west-2.amazonaws.com/data.json"
  ).then((x) => x.json());
  console.log("test", data);
};

export function FetchData() {
  return (
    <>
      <h2>Fetch data</h2>
      <Button colorScheme="blue" onClick={getData}>
        Click this shit
      </Button>
    </>
  );
}
