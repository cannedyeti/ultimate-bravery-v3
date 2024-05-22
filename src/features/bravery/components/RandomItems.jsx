import { useContext } from "react";
import { Avatar, AvatarBadge, Box, Flex, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  ITEM_IMAGE_BASE_URL,
  SPELL_IMAGE_BASE_URL,
} from "src/api/fetchRiotData";
import { BraveryContext } from "src/features/bravery/components/BraveryReducer";
import { abilityArray } from "src/features/bravery/components/helpers";

export function RandomItems() {
  const { state } = useContext(BraveryContext);
  const ability =
    state.selectedRandomChampion.spells[state.selectedRandomAbilityIndex];

  console.log({ ability });

  return (
    <Flex marginTop={8} gap={2} justifyContent="space-between">
      <Box>
        <Tooltip label={ability.name}>
          <Avatar
            src={`${SPELL_IMAGE_BASE_URL}${ability.image.full}`}
            borderRadius={2}
          >
            <AvatarBadge
              boxSize="1.25em"
              color="purple.600"
              borderColor="purple.600"
              backgroundColor="gray.300"
              fontSize="12px"
              padding={2}
            >
              <strong>{abilityArray[state.selectedRandomAbilityIndex]}</strong>
            </AvatarBadge>
          </Avatar>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip label={state.selectedRandomItems.boots.name}>
          <Avatar
            src={`${ITEM_IMAGE_BASE_URL}${state.selectedRandomItems.boots.image.full}`}
            borderRadius={2}
          />
        </Tooltip>
        {state.selectedRandomItems.items.map((item) => (
          <Tooltip key={item.name} label={item.name}>
            <Avatar
              src={`${ITEM_IMAGE_BASE_URL}${item.image.full}`}
              borderRadius={2}
            />
          </Tooltip>
        ))}
      </Box>
      <div>
        <Tooltip
          label={`Optional starter: ${state.selectedRandomItems.starter.name}`}
        >
          <Avatar
            src={`${ITEM_IMAGE_BASE_URL}${state.selectedRandomItems.starter.image.full}`}
            borderRadius={2}
          >
            <AvatarBadge
              boxSize="1.25em"
              color="purple.600"
              borderColor="purple.600"
              backgroundColor="gray.300"
              fontSize="12px"
              padding={2}
            >
              <InfoOutlineIcon />
            </AvatarBadge>
          </Avatar>
        </Tooltip>
      </div>
    </Flex>
  );
}
