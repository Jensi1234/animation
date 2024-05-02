import React, { useContext } from 'react'
import { Button, Box, Text, Flex, scaleFadeConfig, } from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'

const Cart2 = () => {
    const { handleNext2, currentCart, handleBackStep2, nextCart2 } = useContext(AppContext)
    console.log('Cart2 : ', nextCart2)
    return (
        <Flex
            className={nextCart2}
            // className={currentCart === 1 ? nextCart2 : ''}
            w='750px'
            // w={currentCart === 2 ? '800px' : '750px'}
            transform={currentCart === 2 ? 'scaleX(1.05)' : 'scaleX(1)'}
            height='250px'
            p='40px'
            bg='#10A8BB'
            direction='column'
            justifyContent='space-between'
            borderRadius='20px'
        >
            <Text
                visibility={currentCart === 2 ? '' : 'hidden'}
            >
                <Box>Box2</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='space-between' >
                <Button variant='solid' bg='#480608' color='white' onClick={handleBackStep2} _hover={{ color: '#480608', bg: 'white' }}>
                    Back
                </Button>
                <Button variant='solid' bg='#480608' color='white' onClick={handleNext2} _hover={{ color: '#480608', bg: 'white' }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Cart2