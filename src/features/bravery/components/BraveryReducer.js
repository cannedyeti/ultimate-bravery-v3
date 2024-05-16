import { useReducer, createContext } from "react";
import { produce } from "immer";

export const BraveryContext = createContext();

export const getInitialState = () => {
  return {
    selectedChampions: [],
    selectedRandomChampion: null,
  };
};

const ACTIONS = {
  SET_SELECTED_CHAMPIONS: "SET_SELECTED_CHAMPIONS",
  SET_RANDOMIZED_CHAMPION: "SET_RANDOMIZED_CHAMPION",
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
  return {
    state,
    actions: {
      setSelectedChampions,
      setSelectedRandomChampion,
    },
  };
}
