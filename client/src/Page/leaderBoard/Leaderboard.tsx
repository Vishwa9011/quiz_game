import { Box, Center, Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./LeaderBoard.css";
import { useProvider } from "../../context/Provider";
import axios from "axios";

interface Score {
  name: string;
  score: number;
}

const LeaderBoard: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    axios
      .get("https://vast-plum-jaguar-shoe.cyclic.app/score")
      .then((response) => {
        setScores(response.data);
      });
  }, []);
  console.log(scores);

  return (
    <>
      <img
        style={{ width: "100%", overflow: "hidden", objectFit: "cover" }}
        src="https://img.freepik.com/premium-photo/white-question-mark-yellow-concrete-grunge-wall-3d-illustration_665346-2987.jpg"
        alt="error"
      />
      <Box
        className="leader_box"
        w="50%"
        m="auto"
        position="absolute"
        bottom="40%"
        left="28%"
        borderRadius="15px"
        padding="2%"
      >
        <Center>
          <h1 className="leaderboard" style={{ fontSize: "larger" }}>
            Leaderboard
          </h1>
        </Center>
        <Table variant="simple" colorScheme="purple">
          <Thead>
            <Tr>
              <Th color="black" fontSize="large">
                Rank
              </Th>
              <Th color="black" fontSize="large">
                Name
              </Th>
              <Th color="black" fontSize="large">
                Score
              </Th>
            </Tr>
          </Thead>
          <Tbody className="leader_scores">
            {scores.map((score, index) => (
              <Tr key={index}>
                <Td fontSize="medium">{index + 1}</Td>
                <Td fontSize="medium">{score.name}</Td>
                <Td fontSize="medium">{score.score}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};
export default LeaderBoard;
