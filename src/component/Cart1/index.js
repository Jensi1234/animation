import React, { useContext } from 'react'
import { Button, Box, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'

const Cart1 = () => {
    const { currentCart, handleCart1Next, cartOpacity } = useContext(AppContext);
    console.log(cartOpacity)

    return (
        <Flex
            w='800px'
            height={currentCart === 1 ? 'auto' : ''}
            p='40px'
            bg='#088392'
            direction='column'
            justifyContent='space-between'
            borderRadius='20px'
            gap='20px'
        >
            <Text
                visibility='hidden'
                className={currentCart === 1 ? cartOpacity : ''}>
                <Box>Box1</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='end' >
                <Button variant='solid' bg='#480608' color='white' onClick={handleCart1Next} _hover={{ color: '#480608', bg: 'white' }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Cart1