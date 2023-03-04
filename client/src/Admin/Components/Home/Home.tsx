import React from "react";
import "./Home.css";
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { VictoryPie } from "victory";

interface QuizStats {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
}

const sampleQuizStats: QuizStats = {
  totalQuestions: 10,
  correctCount: 7,
  incorrectCount: 2,
  unansweredCount: 1,
};

const AdminDashboard: React.FC = () => {
  const data1 = [
    {
      x: "Correct",
      y: sampleQuizStats.correctCount,
    },
    {
      x: "Incorrect",
      y: sampleQuizStats.incorrectCount,
    },
    {
      x: "Unanswered",
      y: sampleQuizStats.unansweredCount,
    },
  ];

  const data2 = [
    {
      x: "Total Questions",
      y: sampleQuizStats.correctCount,
    },
    {
      x: "Easy",
      y: sampleQuizStats.incorrectCount,
    },
    {
      x: "Medium",
      y: sampleQuizStats.unansweredCount,
    },
    {
      x: "Hard",
      y: sampleQuizStats.unansweredCount,
    },
  ];

  return (
    <Box p={8}>
      <Center>
        <Heading size="lg" mb={4} className="admin_heading">
          Admin Dashboard
        </Heading>
      </Center>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <Center>
          <Box>
            <Heading size="md" mb={4}>
              Quiz Stats
            </Heading>
            <VictoryPie
              data={data1}
              colorScale={["#48BB78", "#F56565", "#ED8936"]}
            />
          </Box>
        </Center>
        <Center>
          <VictoryPie
            data={data2}
            colorScale={["#48BB78", "#F56565", "#ED8936", "grey"]}
          />
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default AdminDashboard;
