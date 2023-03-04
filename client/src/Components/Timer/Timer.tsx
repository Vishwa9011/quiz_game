import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import useTimer from '../../hooks/useTimer';

type Props = {
     initialTimer: { min: number, sec: number }
}

function Timer({ initialTimer }: Props) {

     return (
          <Flex gap='20px'>
               <Text w='10rem' textAlign={'center'} my='2' color='gold' fontSize={'1.5rem'} border={'2px'} p='1' fontWeight={'semibold'} borderRadius={'10px'}>{timeString}</Text>
          </Flex>
     )
}

export default Timer