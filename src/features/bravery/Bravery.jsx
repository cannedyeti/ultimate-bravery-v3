import { useEffect, useState, useContext } from "react";
import { Heading, Flex, Spinner, Button } from "@chakra-ui/react";
import { getRiotData } from "src/api/fetchRiotData";
import { ChampionImage } from "./components/ChampionImage";
import { BraveryContext } from "./components/BraveryReducer";

export function Bravery() {
  const { state, actions } = useContext(BraveryContext);
  console.log({ state });
  const [champData, setChampData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getRiotData();
      console.log({ data });
      let championArray = await Object.keys(data.champions).map((key) => ({
        ...data.champions[key],
      }));
      setChampData(data.champions);
      console.log({ championArray });
      actions.setSelectedChampions(data.champions);
    }
    fetchData();
  }, []);

  const deselectAllChampions = () => {
    actions.setSelectedChampions(null);
  };

  const selectAllChampions = () => {
    actions.setSelectedChampions(champData);
  };

  return (
    <>
      <Heading as="h2">Bravery</Heading>
      <Flex marginY={2} gap={2}>
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={selectAllChampions}
        >
          Select all
        </Button>
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={deselectAllChampions}
        >
          Deselect all
        </Button>
      </Flex>
      <Flex gap={2} wrap="wrap" marginY={4}>
        {champData ? (
          Object.keys(champData).map((champ) => (
            <ChampionImage
              key={champData[champ].id}
              championObject={champData[champ]}
              imageUrl={champData[champ]?.image?.full}
            />
          ))
        ) : (
          <Spinner />
        )}
      </Flex>
    </>
  );
}
