import { useRef } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Fireworks } from "@fireworks-js/react";

export function Home() {
  const ref = useRef(null);
  return (
    <Box height="calc(100vh - 104px)" alignContent="center">
      <Heading textAlign="center" marginY={4}>
        I fucked your mom!
      </Heading>
      <Flex justifyContent="center" position="relative">
        <Image src="https://media.tenor.com/8tqHLy7JfhAAAAAj/milk-pepe.gif" />
        <Fireworks
          ref={ref}
          options={{
            acceleration: 1.05,
            traceSpeed: 5,
          }}
          style={{
            top: "40px",
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
        />
      </Flex>
    </Box>
  );
}
