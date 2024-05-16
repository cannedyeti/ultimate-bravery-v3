import { Link as TanStackLink } from "@tanstack/react-router";
import {
  Flex,
  Link as ChakraLink,
  Button,
  Container,
  Box,
} from "@chakra-ui/react";

const routes = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/bravery",
    label: "Bravery",
  },
];

export function Navigation() {
  return (
    <Box backgroundColor="blackAlpha.800">
      <Container maxWidth="1400px">
        <Flex className="navigation-container" gap="6" paddingY="2">
          {routes.map(({ route, label }) => (
            <ChakraLink as={TanStackLink} to={route} key={route}>
              <Button variant="link" color="purple.300">
                {label}
              </Button>
            </ChakraLink>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
