import PropTypes from "prop-types";
import { CHAMPION_IMAGE_BASE_URL } from "src/api/fetchRiotData";
import { Avatar, Heading, Flex } from "@chakra-ui/react";

export function RandomChampion({ championObject }) {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginY={4}
    >
      <Heading marginY={4} as="h3">
        {championObject.name}
      </Heading>
      <Avatar
        maxW="200px"
        size="xlrg"
        name="Dan Abrahmov"
        src={`${CHAMPION_IMAGE_BASE_URL}${championObject?.image?.full}`}
      />
    </Flex>
  );
}

RandomChampion.propTypes = {
  championObject: PropTypes.object,
};
