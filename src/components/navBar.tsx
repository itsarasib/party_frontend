import { Box, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  return (
    <Box
      height="50px"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      fontWeight={600}
      fontSize="18px"
      bg={"gray.400"}
      mb={"20px"}
    >
      <Box display={"flex"}>
        <Link paddingRight={"50px"} href="/home">
          Home
        </Link>
        <Link href="/dashboard">Dashboard</Link>
      </Box>
      <Box>
        <Link
          backgroundColor="red"
          color="black"
          borderRadius="16px"
          _hover={{ backgroundColor: "green" }}
          padding="10px 18px"
          href="/login"
        >
          {token ? "Sign Out" : "Log In"}
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
