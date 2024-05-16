import { useContext } from "react";
import { Avatar } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CHAMPION_IMAGE_BASE_URL } from "src/api/fetchRiotData";

import { BraveryContext } from "src/features/bravery/components/BraveryReducer";

export function ChampionImage({ imageUrl, championObject }) {
  const { state, actions } = useContext(BraveryContext);

  const toggleSelectedChampion = () => {
    const toggleTo = state.selectedChampions?.[championObject.id]
      ? false
      : championObject;
    actions.setSelectedChampions({
      ...state.selectedChampions,
      [championObject.id]: toggleTo,
    });
  };

  return (
    <>
      <Avatar
        flex="1 1 55px"
        height="auto"
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
  championObject: PropTypes.string,
};
