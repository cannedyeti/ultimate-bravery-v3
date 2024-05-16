import { useContext, useState } from "react";
import { Avatar, Tooltip, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CHAMPION_IMAGE_BASE_URL } from "src/api/fetchRiotData";

import { BraveryContext } from "src/features/bravery/components/BraveryReducer";

export function ChampionImage({ imageUrl, championObject }) {
  const { state, actions } = useContext(BraveryContext);
  const [isHovered, setIsHovered] = useState(false);

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
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Tooltip label={championObject.name} placement="auto">
        <Box
          position="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

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
          _hover={{
            transform: "scale(1.1)",
            zIndex: 1,
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.3)",
          }}
          transition="all 0.2s"
        />
        {isHovered && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.7)"
            borderRadius={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          />
            
        )}
        </Box>
      </Tooltip>
    </>
  );
}

ChampionImage.propTypes = {
  imageUrl: PropTypes.string,
  championObject: PropTypes.object,
};
