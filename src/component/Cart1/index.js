import React, { useContext } from 'react'
import { Button, Box, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../../context/AppContext'

const Cart1 = () => {
    const { handleNext } = useContext(AppContext);

    return (
        
        <Flex
            w='800px'
            height='350px'
            p='40px'
            bg='#088392'
            direction='column'
            justifyContent='space-between'
            borderRadius='20px'
        >
            <Text>
                <Box>Box1</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
                <Box>ndbnklbg</Box>
            </Text>
            <Box display='flex' w='100%' justifyContent='end' >
                <Button variant='solid' bg='#480608' color='white' onClick={handleNext} _hover={{ color: '#480608', bg: 'white' }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}

export default Cart1