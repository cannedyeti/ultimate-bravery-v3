import { useEffect, useState, useContext } from "react";
import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { getRiotData } from "src/api/fetchRiotData";
import { BraveryContext } from "./components/BraveryReducer";
import { ChampionList } from "./components/ChampionList";
import { RandomChampion } from "./components/RandomChampion";

import { randomObjectProperty } from "src/common/helpers";

export function Bravery() {
  const { state, actions } = useContext(BraveryContext);
  const [champData, setChampData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getRiotData();
      setChampData(data.champions);
      actions.setSelectedChampions(data.champions);
    }
    fetchData();
  }, []);

  const randomizeChampion = () => {
    if (!state.selectedChampions)
      return actions.setSelectedRandomChampion(null);
    const champion = randomObjectProperty(state.selectedChampions);
    actions.setSelectedRandomChampion(champion);
  };

  return (
    <>
      <Heading as="h2">Bravery</Heading>
      <Flex marginY={2} gap={4}>
        <Flex flexDirection="column" minW="60%">
          <Button colorScheme="purple" onClick={randomizeChampion}>
            Random
          </Button>
          <div>
            {state.selectedRandomChampion && (
              <RandomChampion championObject={state.selectedRandomChampion} />
            )}
          </div>
        </Flex>
        <Box width="100%">
          <ChampionList champData={champData} />
        </Box>
      </Flex>
    </>
  );
}
