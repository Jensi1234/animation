import React, { useContext } from 'react'
import { Button, Box, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'

const Cart2 = () => {
    const { handleCart2Next, handleCart2Back, currentCart, cart2Width, cartOpacity } = useContext(AppContext);
    console.log(cart2Width)
    console.log(currentCart)

    return (
        <Flex
            className={currentCart === 1 ? cart2Width : ''}
            w='750px'
            style={{ '--start': 0.9, '--end': 1 }}
            transform={currentCart === 2 ? 'scaleX(1)' : 'scaleX(0.9)'}
            //  transform={currentCart === 2 ? 'scaleX(1.05)' : 'scaleX(1)'}
            // height={currentCart === 2 ? '450px' : '150px'}
            maxH={currentCart === 2 ? 'auto' : '150px'}
            p='40px'
            bg='#10A8BB'
            direction='column'
            justifyContent='space-between'
            borderRadius='20px'
            gap='20px'
        >
            <Text visibility='hidden'
                className={currentCart === 2 ? cartOpacity : ''} color='white'>
                <Box>Box2</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='space-between' visibility='hidden' className={currentCart === 2 ? cartOpacity : ''}>
                <Button variant='solid' bg='black' color='white' onClick={handleCart2Back} _hover={{ color: 'black', bg: 'white' }}>
                    Back
                </Button>
                <Button variant='solid' bg='black' color='white' onClick={handleCart2Next} _hover={{ color: 'black', bg: 'white' }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Cart2