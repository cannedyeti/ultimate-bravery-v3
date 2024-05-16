import { useContext } from "react";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { BraveryContext } from "./BraveryReducer";
import { ChampionImage } from "./ChampionImage";

export function ChampionList({ champData }) {
  const { actions } = useContext(BraveryContext);

  const deselectAllChampions = () => {
    actions.setSelectedChampions(null);
  };

  const selectAllChampions = () => {
    actions.setSelectedChampions(champData);
  };

  return (
    <>
      <Flex gap={2}>
        <Button
          flexBasis="50%"
          variant="outline"
          colorScheme="purple"
          onClick={selectAllChampions}
        >
          Select all
        </Button>
        <Button
          flexBasis="50%"
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

ChampionList.propTypes = {
  champData: PropTypes.object,
};
