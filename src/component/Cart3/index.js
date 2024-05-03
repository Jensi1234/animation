import React, { useContext } from 'react'
import { Button, Box, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'
import style from './index.module.css';

const Cart3 = () => {
    const { handleCart3Back, currentCart, cart3Width, cartOpacity } = useContext(AppContext);
    return (
        <Flex
            className={currentCart === 2 ? cart3Width : ''}
            w='700px'
            transform={currentCart === 3 ? 'scaleX(1.05)' : 'scaleX(1)'}
            height={currentCart === 3 ? cart3Width : '150px'}
            p='40px'
            bg='#11D9F1 '
            direction='column'
            justifyContent='space-between'
            borderRadius='20px'
            gap='20px'
        >
            <Text
                visibility='hidden'
                className={currentCart === 3 ? cartOpacity : ''}
            >
                <Box>Box3</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='space-between' visibility={currentCart === 3 ? '' : 'hidden'} className={currentCart === 3 ? style.fade : ''}>
                <Button variant='solid' bg='#480608' color='white' onClick={handleCart3Back} _hover={{ color: '#480608', bg: 'white' }}>
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