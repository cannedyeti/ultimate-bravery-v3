import { createFileRoute } from "@tanstack/react-router";
import { Bravery } from "src/features/bravery";
import {
  BraveryContext,
  useBraveryReducer,
} from "src/features/bravery/components/BraveryReducer";

export const Route = createFileRoute("/bravery")({
  component: () => (
    <BraveryContext.Provider value={useBraveryReducer()}>
      <Bravery />
    </BraveryContext.Provider>
  ),
});
