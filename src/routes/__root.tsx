import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "src/components/navigation/Navigation";
import { Container } from "@chakra-ui/react";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <Container paddingY="2rem">
        <Outlet />
      </Container>
    </>
  );
}
