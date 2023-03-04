import { Box, Center, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useProvider } from '../../context/Provider'

type Props = {}

function LeaderBoard({ }: Props) {

  const { leaderBoard, leaderBoardData } = useProvider();

  useEffect(() => { }, [])

  return (
    <>
      <img
        style={{ width: "100%", overflow: "hidden", objectFit: "cover" }}
        src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
        alt="error"
      />
      <Box w="50%" m="auto" position="absolute" bottom="50%" left="28%" border="4px solid white" borderRadius="15px" padding="2%">
        <Center>
          <h1 className="leaderboard" style={{ fontSize: "larger", color: "white" }}>
            Leaderboard
          </h1>
        </Center>
      </Box>
    </>
  )

}
export default LeaderBoard;