import { useContext } from "react";
import { Avatar, Tooltip, Box } from "@chakra-ui/react";
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
      <Tooltip label={championObject.name}>
        <Box
          flex="0 1 calc(100% / 8 - .5rem)"
          height="auto"
          minWidth="55px"
          _hover={{
            transform: "scale(1.1)",
            zIndex: 1,
          }}
          transition="all 0.2s"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
        >
          <Avatar
            width="100%"
            height="100%"
            onClick={toggleSelectedChampion}
            filter={
              !state.selectedChampions?.[championObject.id] && "grayscale(100%)"
            }
            src={`${CHAMPION_IMAGE_BASE_URL}${imageUrl}`}
            borderRadius={2}
          />
        </Box>
      </Tooltip>
    </>
  );
}

ChampionImage.propTypes = {
  imageUrl: PropTypes.string,
  championObject: PropTypes.object,
};
