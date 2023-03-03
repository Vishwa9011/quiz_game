import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import Avatar from '../Avatar/Avatar';
import { GoSignOut } from "react-icons/go";
import './Navbar.css'
import { Image } from '@chakra-ui/react';
type Props = {}

function Navbar({ }: Props) {
     return (
          <Flex px='2' h='60px' w='80%' m='auto' >
               <Flex align={'center'} justify='center' border={'px'} color='white'>
                    <Image boxSize={'70px'} src="/logo.png" />
               </Flex>
               <Flex align={'center'} gap='10px' ml='auto' className='profile' cursor={'pointer'}>
                    <Avatar src='' name="vishwa vivek " />
                    <Text fontSize={'1.3rem'} fontWeight='semibold'>Karan</Text>
                    <ul className='menu-list'>
                         <li className='list-item'><GoSignOut />Sign Out</li>
                    </ul>
               </Flex>
          </Flex>
     )
}

export default Navbar