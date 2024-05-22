import { useContext } from "react";
import { Avatar, AvatarBadge, Box, Flex, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  ITEM_IMAGE_BASE_URL,
  SPELL_IMAGE_BASE_URL,
} from "src/api/fetchRiotData";
import { BraveryContext } from "src/features/bravery/components/BraveryReducer";
import { abilityArray } from "src/features/bravery/components/helpers";
import { TooltipCard } from "src/features/bravery/components/TooltipCard";

export function RandomItems() {
  const { state } = useContext(BraveryContext);
  const ability =
    state.selectedRandomChampion?.spells?.[state.selectedRandomAbilityIndex];
  console.log(ability.name)
  console.log(ability.description)
  console.log({ability})
  return (
    <Flex marginTop={8} gap={2} justifyContent="space-between">
      <Box>
        <Tooltip label={<TooltipCard header={ability.name} body={ability.description} />}>
          <Avatar
            src={`${SPELL_IMAGE_BASE_URL}${ability?.image?.full}`}
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
        <Tooltip label={
          <TooltipCard header={state.selectedRandomItems.boots.name} body={`${state.selectedRandomItems.boots.gold.total} gold`} />}
        >
          <Avatar
            src={`${ITEM_IMAGE_BASE_URL}${state.selectedRandomItems.boots.image.full}`}
            borderRadius={2}
          />
        </Tooltip>
        {state.selectedRandomItems.items.map((item) => (
          <Tooltip key={item.name} label={<TooltipCard header={item.name} body={`${item.gold.total} gold`} />}>
            <Avatar
              src={`${ITEM_IMAGE_BASE_URL}${item.image.full}`}
              borderRadius={2}
            />
          </Tooltip>
        ))}
      </Box>
      <div>
        <Tooltip
          label={<TooltipCard header={state.selectedRandomItems.starter.name} body={`${state.selectedRandomItems.starter.gold.total} gold`} />}>            
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
