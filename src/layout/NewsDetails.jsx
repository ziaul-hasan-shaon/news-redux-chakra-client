/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Pages/Shared/Header/Header'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import RightNav from '../Pages/Shared/Rightnav/RightNav'
import Footer from '../Pages/Shared/Footer/Footer'

function NewsDetails() {
    return (
        <>
            <Header></Header>
            <Box maxW='1600px' mx='auto'>
                <Grid pos={'relative'} templateColumns={'repeat(8, 1fr)'} gap={4}>
                    <GridItem colSpan={6}>
                        <Outlet />
                    </GridItem>
                    <GridItem colSpan={2} >
                        <RightNav />
                    </GridItem>
                </Grid>
            </Box>
            <Footer></Footer>
        </>
    )
}

export default NewsDetails
