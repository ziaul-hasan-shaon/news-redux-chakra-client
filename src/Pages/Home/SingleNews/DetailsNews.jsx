/* eslint-disable no-unused-vars */
import { Button, Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function DetailsNews() {
    const news = useSelector(state => state.newsReducer.news)
    const { id } = useParams()

    const detailsNews = news.find(n => n._id === id)
    const { _id, category_id, author, details, image_url, thumbnail_url, title } = detailsNews
    return (
        <Card pl={10} py={4}>
            <CardBody>
                <Image
                    src={image_url}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {details}
                    </Text>
                </Stack>
                <Link to={`/categories/${category_id}`}>
                    <Button>See All News in this category</Button>
                </Link>
            </CardBody>
        </Card>
    )
}

export default DetailsNews