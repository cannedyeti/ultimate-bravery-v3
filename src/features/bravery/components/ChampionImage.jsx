import { Avatar } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CHAMPION_IMAGE_BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/";

export function ChampionImage({ imageUrl }) {
  return (
    <>
      <Avatar src={`${CHAMPION_IMAGE_BASE_URL}${imageUrl}`} borderRadius={2} />
    </>
  );
}

ChampionImage.propTypes = {
  imageUrl: PropTypes.string,
};
