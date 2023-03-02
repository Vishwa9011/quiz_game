import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { useRef, useState } from 'react'
import './App.css'
import Question from './Components/Question'

function App() {
     const QueMainContainerRef = useRef<HTMLDivElement>(null);
     const QuestionRef = useRef<HTMLDivElement>(null);
     console.log(QueMainContainerRef.current?.clientWidth);

     function scrollLeft() {
          QueMainContainerRef.current!.scrollLeft += QuestionRef.current!.clientWidth
     }

     return (
          <Box w='80%' h='100dvh' m='auto' display={'flex'} alignItems='center' justifyContent={'center'} >
               <Box>
                    <Box>
                         <Text w='10rem' textAlign={'center'} my='2' color='gold' fontSize={'1.5rem'} border={'2px'} p='1' fontWeight={'semibold'} borderRadius={'10px'}>12:00</Text>
                    </Box>
                    <Flex overflow={'hidden'} ref={QueMainContainerRef}>
                         <Box minW='100%' ref={QuestionRef}>
                              <Question question={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, nam."} />

                         </Box>
                         <Box minW='100%' ref={QuestionRef}>
                              <Question question='2' />
                         </Box>
                         <Box minW='100%' ref={QuestionRef}>
                              <Question question='3' />
                         </Box>
                         <Box minW='100%' ref={QuestionRef}>
                              <Question question='4' />
                         </Box>
                    </Flex>

                    <Flex mt='50px' gap='20px' justify={'flex-end'}>
                         <Button variant={'outline'} border='2px solid white' color={'gold'} onClick={scrollLeft}>Skip</Button>
                         <Button variant={'outline'} border='2px solid white' color={'gold'} onClick={scrollLeft}>Next</Button>
                    </Flex>
               </Box>
          </Box>
     )
}

export default App
