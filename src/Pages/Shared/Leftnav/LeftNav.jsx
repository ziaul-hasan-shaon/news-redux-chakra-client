/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesData } from '../../../app/features/categoriesSlice';
import { Box, Button, Text, background } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function LeftNav() {

    const categories = useSelector(state => state.categoriesReducer.categories)
    console.log(categories)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesData())
    }, [])

    const textStyles = {
        fontSize: '20px',
        fontWight: '600',
        color: 'rebeccapurple',
        borderBottom: '1px solid lightgray',
        padding: '14px 5px',
        ':hover': {
            backgroundColor: 'purple.200',
            color: 'white',
            cursor: 'pointer'
        }
    }

    return (
        <Box position={'sticky'} top={0} display='flex' flexDirection='column' p={10}>
            {categories.map(category => {
                return <Link to={`categories/${category?.id}`} key={category.id}>
                    <Text sx={textStyles}>
                        {category.name}
                    </Text>
                </Link>
            })}
        </Box>
    )
}

export default LeftNav
