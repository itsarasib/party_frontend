import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);

      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center bg="tomato" h="100vh">
      <Box bgColor={"green"} borderRadius={"16px"} display="flex">
        <Box bgColor={"white"} px="100px" py="100px" borderLeftRadius={"16px"}>
          sib
        </Box>
        <Box bgColor={"pink"} px="100px" py="100px" borderRightRadius={"16px"}>
          <Text fontSize="3xl" fontWeight={700} mb={"10px"}>
            Login
          </Text>
          <Box mb={"10px"}>
            <Text fontSize="2xl" fontWeight={700} mb={"10px"}>
              Email
            </Text>
            <Input
              placeholder="email"
              width={"400px"}
              bg={"white"}
              type="email"
              onChange={emailHandler}
            />
          </Box>
          <Box mb={"10px"}>
            <Text fontSize="2xl" fontWeight={700} mb={"10px"}>
              Password
            </Text>
            <Input
              placeholder="password"
              width={"400px"}
              bg={"white"}
              onChange={passwordHandler}
            />
          </Box>
          <Box mb={"20px"}>
            <Text
              mb={"10px"}
              _hover={{ textDecoration: "underline" }}
              cursor={"pointer"}
              width={"30%"}
            >
              Create account?
            </Text>
          </Box>
          <Button _hover={{ backgroundColor: "gray" }} onClick={handleLogin}>
            {" "}
            Login
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default LoginPage;
