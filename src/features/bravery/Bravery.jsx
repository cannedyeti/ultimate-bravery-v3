import { useEffect, useState } from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { getRiotData } from "src/api/fetchRiotData";
import { ChampionImage } from "./components/ChampionImage";

export function Bravery() {
  const [champData, setChampData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getRiotData();
      console.log({ data });
      setChampData(data.champions);
    }
    fetchData();
  }, []);

  return (
    <>
      <Heading as="h2">Bravery</Heading>
      <Flex gap={2} wrap="wrap" marginY={4}>
        {champData ? (
          Object.keys(champData).map((champ) => (
            <ChampionImage
              key={champData[champ].id}
              imageUrl={champData[champ].image.full}
            />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </Flex>
    </>
  );
}
