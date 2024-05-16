import { useReducer, createContext } from "react";
import { produce } from "immer";

export const BraveryContext = createContext();

export const getInitialState = () => {
  return {
    selectedChampions: [],
  };
};

const ACTIONS = {
  SET_SELECTED_CHAMPIONS: "SET_SELECTED_CHAMPIONS",
};

const braveryReducer = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.SET_SELECTED_CHAMPIONS:
        draft.selectedChampions = action.selectedChampions;
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
  return {
    state,
    actions: {
      setSelectedChampions,
    },
  };
}
