import { createFileRoute } from "@tanstack/react-router";
import { Home } from "src/features/home";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});
