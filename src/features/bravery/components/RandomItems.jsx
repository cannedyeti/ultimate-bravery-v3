import { useContext } from "react";
import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { ITEM_IMAGE_BASE_URL, SPELL_IMAGE_BASE_URL } from "src/api/fetchRiotData";
import { getRandomInt } from "src/common/helpers";
import { BraveryContext } from "src/features/bravery/components/BraveryReducer";

export function RandomItems() {
  const { state } = useContext(BraveryContext);
  const randy = getRandomInt(3);
  const qwe = ["Q", "W", "E"]
  const ability = state.selectedRandomChampion?.spells[randy].image.full;

  return (
    <Flex marginTop={8} gap={2} justifyContent="space-between">
      {/* Placeholder */}
      <Box>{qwe[randy]}
      <Tooltip label={state.selectedRandomChampion?.spells[randy].name}>
      <Avatar
        src={`${SPELL_IMAGE_BASE_URL}${ability}`}
        borderRadius={2}
      />
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
