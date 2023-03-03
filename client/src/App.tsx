import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { useRef, useState, useEffect, useMemo } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Question from './Components/Question/Question'
import useTimer from './hooks/useTimer'

function App() {
     const QueMainContainerRef = useRef<HTMLDivElement>(null);
     const QuestionRef = useRef<HTMLDivElement>(null);

     function scrollLeft() {
          QueMainContainerRef.current!.scrollLeft += QuestionRef.current!.clientWidth
     }

     return (
          <Box>
               <Box bg={'purple'} borderBottom={'2px'} borderColor='white' color={'white'}>
                    <Navbar />
               </Box>
               <Box w='80%' h='100dvh' m='auto' display={'flex'} alignItems='center' justifyContent={'center'} >
                    <Box>
                         <Flex overflow={'hidden'} ref={QueMainContainerRef}>
                              <Box minW='100%' ref={QuestionRef} p='2'>
                                   <Question qn={1} scrollLeft={scrollLeft} question={"Lorem ipsum dolor"} options={[1, 2, 3, 4]} answer="1" />
                              </Box>
                              <Box minW='100%' ref={QuestionRef}>
                                   <Question qn={2} scrollLeft={scrollLeft} question={"Lorem ipsum dolor 2"} options={[1, 2, 3, 4]} answer="1" />
                              </Box>
                         </Flex>
                    </Box>
               </Box>
          </Box >
     )
}

export default App
