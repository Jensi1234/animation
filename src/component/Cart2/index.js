import React, { useContext } from 'react'
import { Button, Box, Text, Flex} from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'
import style from './index.module.css'

console.log('fade',style.fade)

const Cart2 = () => {
    const {  handleCart2Next, handleCart2Back , currentCart ,cart2NextWidth} = useContext(AppContext);

    return (
        <Flex
        className ={currentCart ===1 ? cart2NextWidth : ''}
            w='750px'
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
            className={currentCart === 2 ? style.fade : ''}
            >
                <Box>Box2</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='space-between' >
                <Button variant='solid' bg='#480608' color='white' onClick={handleCart2Back} _hover={{ color: '#480608', bg: 'white' }}>
                    Back
                </Button>
                <Button variant='solid' bg='#480608' color='white' onClick={handleCart2Next} _hover={{ color: '#480608', bg: 'white' }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Cart2