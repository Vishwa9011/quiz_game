import { FormEvent, useState } from "react";
import axios from "axios";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  RadioGroup,
  Radio,
  Image,
  Center,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import "./Register.css";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Couter = chakra(AiOutlineUser);
export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Easy");
  const handleShowClick = () => setShowPassword(!showPassword);

  const handleData = (e: FormEvent) => {
    e.preventDefault();
    // console.log(avatar);
    // console.log(name)
    axios
      .post("https://vast-plum-jaguar-shoe.cyclic.app/user/add", {
        name: name,
        avtar: avatar,
        level: level,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Flex
      className="back"
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Image src="http://clipart-library.com/img/1179379.gif"/> */}
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Heading color="teal.400">Welcome</Heading> */}

        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleData}>
            <Center>
              <Stack
                className="card"
                borderRadius={"50px"}
                spacing={4}
                p="1rem"
                h="55vh"
                w="25vw"
                boxShadow="md"
              >
                <Center>
                  {" "}
                  <Heading id="heading" color={"white"} fontSize={"30px"}>
                    Register to Play
                  </Heading>
                </Center>

                <FormControl>
                  <Center>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<Couter color="white" />}
                      />

                      <Input
                        color={"white"}
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>
                  </Center>
                </FormControl>
                <select
                  name="Select the level"
                  id="Easy"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="Easy">Easy</option>
                  <option value="hard">Hard</option>
                  <option value="Medium">Medium</option>
                </select>
                <RadioGroup defaultValue="2">
                  <Heading
                    fontSize={"15px"}
                    color={"skyblue"}
                    marginTop={"10px"}
                    marginBottom={"20px"}
                  >
                    Select your avatar
                  </Heading>
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="green"
                      value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIQGklKp0DBSuhONZUGk8DWvs4VUZJ79FTn0dQxqCh-aCU_RTDwGCbWeAe0UnPjywfkY&usqp=CAU"
                      onChange={(e) => setAvatar(e.target.value)}
                    >
                      <Image
                        w={"60px"}
                        borderRadius={"100%"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIQGklKp0DBSuhONZUGk8DWvs4VUZJ79FTn0dQxqCh-aCU_RTDwGCbWeAe0UnPjywfkY&usqp=CAU"
                      />
                    </Radio>

                    <Radio
                      colorScheme="green"
                      value="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg?w=2000"
                      onChange={(e) => setAvatar(e.target.value)}
                    >
                      <Image
                        w={"65px"}
                        borderRadius={"100%"}
                        src="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg?w=2000"
                      />
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Center>
                  <Button
                    className="container"
                    borderRadius={20}
                    type="submit"
                    variant="solid"
                    _hover={{ bg: " rgba(0, 212, 255, 1) 100%" }}
                    colorScheme="teal"
                    width="20vw"
                  >
                    Play Game
                  </Button>
                </Center>
              </Stack>
            </Center>
          </form>
        </Box>
      </Stack>
      {/* <Box>
        New to us?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box> */}
    </Flex>
  );
};
