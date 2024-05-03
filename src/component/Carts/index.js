import React, { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Cart1 from "../Cart1";
import Cart3 from "../Cart3";
import Cart2 from "../Cart2";
import { AppContext } from "../../context/AppContext";

const Carts = () => {
  const { currentCart, cart1NextTop, cart2NextTop } = useContext(AppContext);
 
  return (
    <Box position="relative">
      <Flex justifyContent="center">
        <Box position="absolute" top="245px">
          <Cart3 />
        </Box>
      </Flex>

      {currentCart !== 3 && (
        <Flex justifyContent="center">
          <Box position="absolute" top="260px" className={cart2NextTop}>
            <Cart2 />
          </Box>
        </Flex>
      )}

      {currentCart === 1 && (
        <Flex justifyContent="center">
          <Box position="absolute" top="280px" className={cart1NextTop}>
            <Cart1 />
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Carts;