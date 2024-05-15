import { createFileRoute } from "@tanstack/react-router";
import { FetchData } from "src/features/fetch-data";

export const Route = createFileRoute("/fetch-data")({
  component: () => <FetchData />,
});
