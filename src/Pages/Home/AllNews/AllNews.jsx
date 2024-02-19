/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ViewIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { BiChat, BiDotsVerticalRounded, BiLike, BiShare } from "react-icons/bi";
import { Link } from 'react-router-dom';

function AllNews({ n }) {

    const { _id, category_id, title, author, rating, thumbnail_url, image_url, details, total_view } = n;

    return (
        <Card my={5}>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex gap='4' flex='1' alignItems='center' flexWrap='wrap'>
                        <Avatar name={author.name} src={author.img} />

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>{author.published_date}</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BiDotsVerticalRounded />}
                    />
                </Flex>
            </CardHeader>
            <Image
                objectFit='cover'
                src={image_url}
                alt='Chakra UI'
            />
            <CardBody>
                <Text>
                    {details.split(' ').slice(0, 80).join(' ')}......<Link to={`/news/${n?._id}`}><span style={{color:'red.400', fontWeight:'bold'}}>Read more</span></Link>
                </Text>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AllNews
