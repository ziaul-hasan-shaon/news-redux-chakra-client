/* eslint-disable no-unused-vars */
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../../assets/images/The-New-York-Times-Logo-min-removebg-preview.png'
import moment from 'moment'
import Clock from '../../Home/Clock/Clock'
import Marquee from "react-fast-marquee";
import Navbar from '../Navbar/Navbar'

function Header() {
    return (
        <Box maxW='1000px' mx='auto' my='20px'>
            <Box textAlign='center' maxW='800px' mx='auto'>
                <Box display='flex' justifyContent='center'>
                    <Image src={logo}></Image>
                </Box>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores autem </Text>
                {/* <Heading fontSize='28px' color='red.300' my={4}>{moment().format('dddd')}</Heading> */}
                <Heading fontSize='28px' color='rebeccapurple' my={4}>{moment().format('MMMM Do YYYY')}</Heading>
                <Clock></Clock>
            </Box>
            <Box display='flex' bg='gray.100' borderRadius='lg'>
                <Button py={2} px={4} borderRadius='lg' bg='red.500' color='white'>Latest News</Button>
                <Marquee pauseOnHover={true} speed={70}>
                    <Text fontSize='18px' color='red.600'>You can find latest news update from here. We update news in every moment for you. You can find news from everywhere around the word. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur ducimus eum quisquam officia, mollitia vero ea repudiandae tenetur omnis.</Text>
                </Marquee>
            </Box>
            <Navbar></Navbar>
        </Box>
    )
}

export default Header
