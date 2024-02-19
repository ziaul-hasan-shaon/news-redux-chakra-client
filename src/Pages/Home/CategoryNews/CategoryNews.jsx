/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllNews from '../AllNews/AllNews';

function CategoryNews() {
    const news = useSelector(state => state.newsReducer.news)
    const { id } = useParams();
    const categoryNews = news.filter(n => n.category_id === id)
    return (
        <Box>
            <Heading color='red.400' textAlign='center' my={5}>
                Today's All Important News from All Over the World
            </Heading>
            <Box>
                {(id == 0) ? ( news.map(n => <AllNews key={news?._id} n={n}></AllNews>) ) :categoryNews.length>0? (categoryNews?.map(n => <AllNews key={news._id} n={n}></AllNews>)): <Text fontSize='30px' fontWeight='bold' color='red.400' h='500px' display='flex' justifyContent='center' alignItems='center'>No News on This Category</Text>}
            </Box>
        </Box>
    )
}

export default CategoryNews
