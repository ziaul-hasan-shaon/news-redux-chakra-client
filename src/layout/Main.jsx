/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Pages/Shared/Header/Header'
import Footer from '../Pages/Shared/Footer/Footer'
import { Grid, GridItem } from '@chakra-ui/react'
import LeftNav from '../Pages/Shared/Leftnav/LeftNav'
import RightNav from '../Pages/Shared/Rightnav/RightNav'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <>
            <Header></Header>
            <Grid pos={'relative'} templateColumns={'repeat(5, 1fr)'} gap={4}>
                <GridItem colSpan={1} >
                    <LeftNav/>
                </GridItem>
                <GridItem colSpan={3}>
                    <Outlet/>
                </GridItem>
                <GridItem colSpan={1} >
                    <RightNav/>
                </GridItem>
            </Grid>
            <Footer></Footer>
        </>
    )
}

export default Main
