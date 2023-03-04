import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Center } from "@chakra-ui/react";

interface LeaderboardEntry {
  name: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/api/leaderboard");
      const data = await response.json();
      setEntries(data);
    };
    fetchEntries();
  }, []);

  // Sort the entries by score, in descending order
  const sortedEntries = [...entries].sort((a, b) => b.score - a.score);

  return (
    <>
      <img
        style={{ width: "100%", overflow: "hidden", objectFit: "cover" }}
        src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
        alt="error"
      />
      <Box
        w="50%"
        m="auto"
        position="absolute"
        bottom="50%"
        left="28%"
        border="4px solid white"
        borderRadius="15px"
        padding="2%"
      >
        <Center>
          <h1
            className="leaderboard"
            style={{ fontSize: "larger", color: "white" }}
          >
            Leaderboard
          </h1>
        </Center>

        <Table
          mt="5%"
          variant="simple"
          colorScheme="purple"
          style={{ border: "2px solid white" }}
        >
          <Thead>
            <Tr
              style={{
                margin: "auto",
                backgroundColor: "grey",
                borderRadius: "12px",
              }}
            >
              <Th color="white">Rank</Th>
              <Th color="white">Name</Th>
              <Th color="white">Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedEntries.map((entry, index) => (
              <Tr key={entry.name}>
                <Td>{index + 1}</Td>
                <Td>{entry.name}</Td>
                <Td>{entry.score}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Leaderboard;
