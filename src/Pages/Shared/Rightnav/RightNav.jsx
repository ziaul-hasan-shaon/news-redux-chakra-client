/* eslint-disable no-unused-vars */
import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { BiLogoGithub, BiLogoGoogle } from 'react-icons/bi'

function RightNav() {
    return (
        <Box display='flex' flexDirection='column' gap={5} p={5} position={'sticky'} top={0}>
            <Heading fontSize='20px' color='rebeccapurple'>Login With</Heading>
            <Box>
                <Button px={8} py={6} fontSize='20px' width='100%' colorScheme='blue' variant='outline'><BiLogoGoogle color='hsl(213.75deg 68.99% 59.85%)' fontSize='24px' max={5}/>Login with Google</Button>
            </Box>
            <Box>
                <Button px={8} py={6} fontSize='20px' width='100%' colorScheme='gray.500' variant='outline'><BiLogoGithub color='gray' fontSize='24px' max={5}/>Login with Github</Button>
            </Box>
        </Box>
    )
}

export default RightNav
