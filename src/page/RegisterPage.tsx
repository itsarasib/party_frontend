import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const firstnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  const lastnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);

      localStorage.setItem("token", data.token);
      console.log(data.token);

      navigate("/home");
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
            Registration
          </Text>
          <Box mb={"10px"}>
            <Text fontSize="2xl" fontWeight={700} mb={"10px"}>
              Firstname
            </Text>
            <Input
              placeholder="firstname"
              width={"400px"}
              bg={"white"}
              onKeyDown={handleKeyDown}
              onChange={firstnameHandler}
              value={firstname}
            />
          </Box>
          <Box mb={"10px"}>
            <Text fontSize="2xl" fontWeight={700} mb={"10px"}>
              Lastname
            </Text>
            <Input
              placeholder="lastname"
              width={"400px"}
              bg={"white"}
              onKeyDown={handleKeyDown}
              onChange={lastnameHandler}
              value={lastname}
            />
          </Box>
          <Box mb={"10px"}>
            <Text fontSize="2xl" fontWeight={700} mb={"10px"}>
              Email
            </Text>
            <Input
              placeholder="email"
              width={"400px"}
              bg={"white"}
              type="email"
              onKeyDown={handleKeyDown}
              onChange={emailHandler}
              value={email}
            />
          </Box>
          <Box mb={"20px"}>
            <Text fontSize="2xl" fontWeight={700} mb={"10px"}>
              Password
            </Text>
            <Input
              placeholder="password"
              width={"400px"}
              bg={"white"}
              onKeyDown={handleKeyDown}
              onChange={passwordHandler}
              value={password}
            />
          </Box>
          <Button _hover={{ backgroundColor: "gray" }} onClick={handleRegister}>
            {" "}
            Signup
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default RegisterPage;
