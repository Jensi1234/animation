import React, { useContext } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Cart1 from '../Cart1';
import Cart3 from '../Cart3';
import Cart2 from '../Cart2';
import { AppContext } from '../../context/AppContext';


const Carts = () => {
    const { currentCart, nextCart1 , topCss2 } = useContext(AppContext)
    // console.log('Carts', nextCart1)

    return (
        <Box position='relative'>
            {currentCart === 1 ? (
                <Flex justifyContent='center'>
                    <Box position='absolute' top='245px' > <Cart3 /></Box>
                    <Box position='absolute' top='260px'><Cart2 /> </Box>
                    <Box position='absolute' top='280px' className={nextCart1} ><Cart1 /></Box>
                </Flex>
            ) :
                currentCart === 2 ?
                    (
                        <Flex justifyContent='center'>
                            <Box position='absolute' top='245px' > <Cart3 /></Box>
                            <Box position='absolute' top='260px' className={topCss2}> <Cart2 /></Box>
                        </Flex>

                    ) :
                    currentCart === 3 ? (
                        <Flex justifyContent='center'>
                            <Box position='absolute' top='245px'> <Cart3 /></Box>
                        </Flex>
                    ) : 'no Data Found'
            }
        </Box>
    )
}

export default Carts    