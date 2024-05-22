import { useEffect, useState, useContext } from "react";
import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { getRiotData } from "src/api/fetchRiotData";
import { BraveryContext } from "./components/BraveryReducer";
import { ChampionList, RandomChampion, RandomItems } from "./components";
import { sortItemData, SUMMONERS_RIFT_MAP_ID } from "./components/helpers";
import {
  getRandomInt,
  randomObjectProperty,
  randomUniqueItemsFromArray,
} from "src/common/helpers";

export function Bravery() {
  const { state, actions } = useContext(BraveryContext);
  const [champData, setChampData] = useState(null);
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getRiotData();
      setItemData(sortItemData(data.items, SUMMONERS_RIFT_MAP_ID));
      setChampData(data.champions);
      actions.setSelectedChampions(data.champions);
    }
    fetchData();
  }, []);

  const randomizeChampion = () => {
    if (!state.selectedChampions) {
      actions.setSelectedRandomChampion(null);
      actions.setSelectedRandomItems(null);
      return;
    }
    const champion = randomObjectProperty(state.selectedChampions);
    randomizeItems();
    actions.setSelectedRandomChampion(champion);
    actions.setSelectedRandomAbilityIndex(getRandomInt(3));
  };

  const randomizeItems = () => {
    // todo: make jungle percentage a constant and make a toggle for lanes
    const isJungler = Math.random() > 0.8;
    const randomItemsObj = {
      starter: isJungler
        ? randomObjectProperty(itemData.starter.jungle)
        : randomObjectProperty(itemData.starter.lane),
      boots: randomObjectProperty(itemData.boots),
      items: randomUniqueItemsFromArray(itemData.items, 5),
    };

    console.log({ randomItemsObj });
    actions.setSelectedRandomItems(randomItemsObj);
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
              <>
                <RandomChampion championObject={state.selectedRandomChampion} />
                <RandomItems />
              </>
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
