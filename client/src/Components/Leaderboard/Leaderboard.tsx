import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

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
    <Box>
      <h2>Leaderboard</h2>
      <Table variant="simple" colorScheme="purple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th>Score</Th>
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
  );
};

export default Leaderboard;
