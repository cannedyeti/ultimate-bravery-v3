import { useState, useContext, useEffect } from "react";
import { Button, Flex, Spinner, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { BraveryContext } from "./BraveryReducer";
import { ChampionImage } from "./ChampionImage";

export function ChampionList({ champData }) {
  const [champObj, setChampObj] = useState(null);

  useEffect(() => {
    setChampObj(champData);
  }, [champData]);

  const { actions } = useContext(BraveryContext);

  const deselectAllChampions = () => {
    actions.setSelectedChampions(null);
  };

  const selectAllChampions = () => {
    actions.setSelectedChampions(champData);
  };

  const searchChampObject = ({ target }) => {
    if (!target.value.length) {
      setChampObj(champData);
      return;
    }
    const filtered = Object.keys(champData)
      .filter((key) => key.toLowerCase().includes(target.value.toLowerCase()))
      .reduce((obj, key) => {
        if (!obj) return;
        obj[key] = champData?.[key];
        return obj;
      }, {});
    setChampObj(filtered);
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
      <Input
        colorScheme="blackAlpha"
        onChange={searchChampObject}
        placeholder="Search for a champion"
        marginTop={4}
      />
      <Flex gap={2} wrap="wrap" marginY={4} justifyContent="center">
        {champObj ? (
          Object.keys(champObj).map((champ) => (
            <ChampionImage
              key={champObj?.[champ].id}
              championObject={champObj?.[champ]}
              imageUrl={champObj?.[champ]?.image?.full}
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
