import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "src/components/navigation/Navigation";
import { Container, Box } from "@chakra-ui/react";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  return (
    <Box backgroundColor="gray.300" height="100%" minHeight="100vh">
      <Navigation />
      <Container paddingY="2rem" maxWidth="1400px">
        <Outlet />
      </Container>
    </Box>
  );
}
