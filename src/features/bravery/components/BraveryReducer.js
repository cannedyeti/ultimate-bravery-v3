import { useReducer, createContext } from "react";
import { produce } from "immer";

export const BraveryContext = createContext();

export const getInitialState = () => {
  return {
    selectedChampions: [],
    selectedRandomChampion: null,
    selectedRandomItems: null,
    selectedRandomAbilityIndex: 0,
  };
};

const ACTIONS = {
  SET_SELECTED_CHAMPIONS: "SET_SELECTED_CHAMPIONS",
  SET_RANDOMIZED_CHAMPION: "SET_RANDOMIZED_CHAMPION",
  SET_RANDOMIZED_ITEMS: "SET_RANDOMIZED_ITEMS",
  SET_RANDOMIZED_ABILITY_INDEX: "SET_RANDOMIZED_ABILITY_INDEX",
};

const braveryReducer = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.SET_SELECTED_CHAMPIONS:
        draft.selectedChampions = action.selectedChampions;
        break;

      case ACTIONS.SET_RANDOMIZED_CHAMPION:
        draft.selectedRandomChampion = action.selectedRandomChampion;
        break;

      case ACTIONS.SET_RANDOMIZED_ITEMS:
        draft.selectedRandomItems = action.selectedRandomItems;
        break;
      
      case ACTIONS.SET_RANDOMIZED_ABILITY_INDEX:
        draft.selectedRandomAbilityIndex = action.selectedRandomAbilityIndex;
        break;

      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  });
};

export function useBraveryReducer(init = getInitialState()) {
  const [state, dispatch] = useReducer(braveryReducer, init);

  const setSelectedChampions = (selectedChampions) => {
    dispatch({
      type: ACTIONS.SET_SELECTED_CHAMPIONS,
      selectedChampions,
    });
  };
  const setSelectedRandomChampion = (selectedRandomChampion) => {
    dispatch({
      type: ACTIONS.SET_RANDOMIZED_CHAMPION,
      selectedRandomChampion,
    });
  };
  const setSelectedRandomItems = (selectedRandomItems) => {
    dispatch({
      type: ACTIONS.SET_RANDOMIZED_ITEMS,
      selectedRandomItems,
    });
  };
  const setSelectedRandomAbilityIndex = (selectedRandomAbilityIndex) => {
    dispatch({
      type: ACTIONS.SET_RANDOMIZED_ABILITY_INDEX,
      selectedRandomAbilityIndex,
    });
  }
  return {
    state,
    actions: {
      setSelectedChampions,
      setSelectedRandomChampion,
      setSelectedRandomItems,
      setSelectedRandomAbilityIndex,
    },
  };
}
