import { useContext } from "react";
import { Avatar } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CHAMPION_IMAGE_BASE_URL } from "src/api/fetchRiotData";

import { BraveryContext } from "src/features/bravery/components/BraveryReducer";

export function ChampionImage({ imageUrl, championObject }) {
  const { state, actions } = useContext(BraveryContext);

  const toggleSelectedChampion = () => {
    const addChampion = state.selectedChampions?.[championObject.id]
      ? false
      : championObject;
    const updatedChampionList = {
      ...state.selectedChampions,
    };
    addChampion
      ? (updatedChampionList[championObject.id] = championObject)
      : delete updatedChampionList[championObject.id];
    actions.setSelectedChampions(updatedChampionList);
  };

  return (
    <>
      <Avatar
        flex="0 1 calc(100% / 8 - .5rem)"
        height="auto"
        minWidth="55px"
        onClick={toggleSelectedChampion}
        filter={
          !state.selectedChampions?.[championObject.id] && "grayscale(100%)"
        }
        src={`${CHAMPION_IMAGE_BASE_URL}${imageUrl}`}
        borderRadius={2}
      />
    </>
  );
}

ChampionImage.propTypes = {
  imageUrl: PropTypes.string,
  championObject: PropTypes.object,
};
