import { createFileRoute } from "@tanstack/react-router";
import { Bravery } from "src/features/bravery";

export const Route = createFileRoute("/bravery")({
  component: () => <Bravery />,
});
