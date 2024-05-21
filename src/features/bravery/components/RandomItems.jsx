import { useContext } from "react";
import { Avatar, Box, Flex, Spinner, Tooltip } from "@chakra-ui/react";
import { ITEM_IMAGE_BASE_URL, SPELL_IMAGE_BASE_URL } from "src/api/fetchRiotData";
import { BraveryContext } from "src/features/bravery/components/BraveryReducer";
import { abilityArray } from "src/features/bravery/components/helpers";
import { getRandomInt } from "src/common/helpers";

export function RandomItems() {
  const { state } = useContext(BraveryContext);
  const starterAbilityIndex = getRandomInt(3);
  const ability = state.selectedRandomChampion?.spells[starterAbilityIndex];

  return (
    <Flex marginTop={8} gap={2} justifyContent="space-between">
      <Box>{abilityArray[starterAbilityIndex]}
        {ability?.name ? (
          <Tooltip label={ability.name}>
            <Avatar
              src={`${SPELL_IMAGE_BASE_URL}${ability.image.full}`}
              borderRadius={2}
            />
          </Tooltip>
        )
          : (
          <Spinner />
        )}
      </Box>

      <Box>
        <Tooltip label={state.selectedRandomItems.boots.name}>
          <Avatar
            src={`${ITEM_IMAGE_BASE_URL}${state.selectedRandomItems.boots.image.full}`}
            borderRadius={2}
          />
        </Tooltip>
        {state.selectedRandomItems.items.map((item) => (
          <Tooltip key={item.key} label={item.name}>
            <Avatar
              src={`${ITEM_IMAGE_BASE_URL}${item.image.full}`}
              borderRadius={2}
            />
          </Tooltip>
        ))}
      </Box>
      <div>
        <Tooltip label={state.selectedRandomItems.starter.name}>
          <Avatar
            src={`${ITEM_IMAGE_BASE_URL}${state.selectedRandomItems.starter.image.full}`}
            borderRadius={2}
          />
        </Tooltip>
        Starter
      </div>
    </Flex>
  );
}
