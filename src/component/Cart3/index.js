import React, { useContext } from 'react'
import { Button, Box, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'

const Cart3 = () => {
    const { handleBackStep3, currentCart, nextCart3 } = useContext(AppContext)
    // console.log('Cart3',nextCart3)
    return (
        <Flex
            className={currentCart === 2 ? nextCart3 : ''}
            w='700px'
            // w={currentCart === 3 ? '800px' : '700px'}
            transform={currentCart === 3 ? 'scaleX(1.1)' : 'scaleX(1)'}
            height={currentCart === 3 ? '350px' : '250px'}
            p='40px'
            bg='#11D9F1 '
            direction='column'
            justifyContent='space-between'
            borderRadius='20px'

        >
            <Text visibility={currentCart === 3 ? '' : 'hidden'}>
                <Box>Box3</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='space-between' >
                <Button variant='solid' bg='#480608' color='white' onClick={handleBackStep3} _hover={{ color: '#480608', bg: 'white' }}>
                    Back
                </Button>
                {/* <Button variant='solid' bg='#480608' color='white' onClick={handleNext} _hover={{ color: 'black', bg: 'white' }}>
                    Get Start
                </Button> */}
            </Box>
        </Flex>
    )
}

export default Cart3