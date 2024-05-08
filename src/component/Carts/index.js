import React, { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Cart1 from "../Cart1";
import Cart3 from "../Cart3";
import Cart2 from "../Cart2";
import { AppContext } from "../../context/AppContext";

const Carts = () => {
    const { currentCart, cart1Top, cart2Top } = useContext(AppContext);

    return (
        <Box position="relative">
            <Flex justifyContent="center">
                <Box
                    position="absolute"
                    top='145px'>
                   
                    <Cart3 />
                </Box>
            </Flex>

            {currentCart !== 3 && (
                <Flex justifyContent="center">
                    <Box
                        position="absolute"
                        top='160px'
                        className={cart2Top}
                        // style={{'--start' : currentCart === 2 ? 0.6: 0.8,'--end' : currentCart === 2 ?1 : 0.9} }
                        >
                        <Cart2 />
                    </Box>
                </Flex>
            )}

            {currentCart === 1 && (
                <Flex justifyContent="center">
                    <Box
                        position="absolute"
                        top='180px'
                        className={cart1Top}
                    >
                        <Cart1 />
                    </Box>
                </Flex>
            )}
        </Box>
    );
};

export default Carts;