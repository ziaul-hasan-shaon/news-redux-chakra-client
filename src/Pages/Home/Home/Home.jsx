/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewsData } from '../../../app/features/newsSlice'
import { Box, Heading, Image } from '@chakra-ui/react'
import AllNews from '../AllNews/AllNews'

function Home() {

    const news = useSelector(state => state.newsReducer.news)
    console.log(news)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNewsData())
    }, [])
    return (
        <Box>
            <Heading color='red.400' textAlign='center' my={5}>
                Today's All Important News from All Over the World
            </Heading>
            <Box>
                {news.map(n => <AllNews key={news._id} n={n}></AllNews>)}
            </Box>
        </Box>
    )
}

export default Home
