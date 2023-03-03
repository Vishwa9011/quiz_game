import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface FormData {
  img: string;
  qsn: string;
  ans: string;
  opt: string[] | number[];
  level: string;
}

function Add_Question() {
  const [img, setImage] = useState("");
  const [qsn, setQsn] = useState("");
  const [ans, setAns] = useState("");
  const [opt, setOpt] = useState([]);
  const [level, setLevel] = useState("");
  const [options, setOptions] = useState("");
  const [data, setData] = useState([]);

  const handleQuestionData = (e: { preventDefault: () => void }): any => {
    
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Add Image</FormLabel>
              <Input
                value={img}
                onChange={(e) => setImage(e.target.value)}
                type="file"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Add Question</FormLabel>
              <Input
                value={qsn}
                onChange={(e) => setQsn(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Add Answer</FormLabel>
              <Input
                value={ans}
                onChange={(e) => setAns(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Add Options</FormLabel>
              <Input
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Add Level</FormLabel>
              <Input
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                type="text"
              />
            </FormControl>
            <Button
              onClick={handleQuestionData}
              width="full"
              mt={4}
              type="submit"
            >
              Add
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Add_Question;
