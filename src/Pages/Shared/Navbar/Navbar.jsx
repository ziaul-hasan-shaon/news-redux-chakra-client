/* eslint-disable no-unused-vars */
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Container maxW="100%" p={3}>
            <Breadcrumb spacing='20px' display="flex" justifyContent="center" separator={<ChevronRightIcon h={8} w={5} color='rebeccapurple' />}>
                <BreadcrumbItem>
                    <Link to='/'>
                        <Text fontSize="20px" fontWeight={500} color='rebeccapurple'>Home</Text>
                    </Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to='/display'>
                        <Text fontSize="20px" fontWeight={500} color="rebeccapurple">All Users</Text>
                    </Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <Link to='/addData'>
                        <Text fontSize="20px" fontWeight={500} color="rebeccapurple">Add User</Text>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </Container>
    )
}

export default Navbar
