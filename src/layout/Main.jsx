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
            <Grid templateColumns={'repeat(5, 1fr)'} gap={4}>
                <GridItem colSpan={1} bg='tomato'>
                    <LeftNav/>
                </GridItem>
                <GridItem colSpan={3} bg='papayawhip'>
                    <Outlet/>
                </GridItem>
                <GridItem colSpan={1} bg='lightcyan'>
                    <RightNav/>
                </GridItem>
            </Grid>
            <Footer></Footer>
        </>
    )
}

export default Main
