import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

interface Credentials {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const toast = useToast();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      credentials.username === "vishwa@gmail.com" &&
      credentials.password === "123456789"
    ) {
      toast({
        title: "Logged in successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/home");
    } else {
      navigate("/login");
    }
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
              <FormLabel>Email</FormLabel>
              <Input
                value={credentials.username}
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    username: event.target.value,
                  })
                }
                type="email"
                placeholder="Enter Your Email"
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                value={credentials.password}
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    password: event.target.value,
                  })
                }
                type="password"
                placeholder="*******"
              />
            </FormControl>
            <Button onClick={handleSubmit} width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;
