import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "./Question.css";

type Props = {
     question: string
}

function Question({ question }: Props) {
     return (
          <Box>
               <Flex h='' justify={'space-between'} gap='50px'>
                    <Box className='left' w='100%'>
                         <Flex className='question' color={'whiteAlpha.800'} align={'center'} justify='center' textAlign={'center'} h='100px' fontSize={'1.3rem'} p='5' fontWeight={'semibold'}>
                              {question}
                         </Flex>
                         <Flex mt='10px' cursor={'pointer'} className={`options ${""}`} gap='10px' p='1' px='4' alignItems={'center'}>
                              <Text fontSize={'1.5rem'} color='gold' className='list' whiteSpace={'nowrap'} fontWeight={'bold'}>A :</Text>
                              <Text fontSize={'1rem'} className='ans' color={'whiteAlpha.800'} fontWeight='semibold'>Lorem </Text>
                         </Flex>
                         <Flex mt='10px' cursor={'pointer'} className={`options ${""}`} gap='10px' p='1' px='4' alignItems={'center'}>
                              <Text fontSize={'1.5rem'} color='gold' className='list' whiteSpace={'nowrap'} fontWeight={'bold'}>A :</Text>
                              <Text fontSize={'1rem'} className='ans' color={'whiteAlpha.800'} fontWeight='semibold'>Lorem </Text>
                         </Flex>
                         <Flex mt='10px' cursor={'pointer'} className={`options ${""}`} gap='10px' p='1' px='4' alignItems={'center'}>
                              <Text fontSize={'1.5rem'} color='gold' className='list' whiteSpace={'nowrap'} fontWeight={'bold'}>A :</Text>
                              <Text fontSize={'1rem'} className='ans' color={'whiteAlpha.800'} fontWeight='semibold'>Lorem </Text>
                         </Flex>
                         <Flex mt='10px' cursor={'pointer'} className={`options ${""}`} gap='10px' p='1' px='4' alignItems={'center'}>
                              <Text fontSize={'1.5rem'} color='gold' className='list' whiteSpace={'nowrap'} fontWeight={'bold'}>A :</Text>
                              <Text fontSize={'1rem'} className='ans' color={'whiteAlpha.800'} fontWeight='semibold'>Lorem </Text>
                         </Flex>
                    </Box>
                    <Flex w='40%' className='right' >
                         <Image objectFit={'contain'} objectPosition='center' src='https://static.voicethread.com/wp-uploads/2018/08/Screen-Shot-2018-08-15-at-10.49.00-AM.png' />
                    </Flex>
               </Flex>
          </Box >
     )
}

export default Question