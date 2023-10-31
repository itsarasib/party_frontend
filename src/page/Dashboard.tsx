import { Box, useDisclosure } from "@chakra-ui/react";
import CreateModal from "../components/CreateModal";
import { useEffect, useState } from "react";
import axios from "axios";

interface Party {
  title: string;
  location: string;
  type: string;
  date: string;
  maximumPeople: number;
}

const Dashboard: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [parties, setParties] = useState<Party[]>([]);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const resp = await axios.get("http://localhost:8080/party");
        if (resp.status === 200) {
          setParties(resp.data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchParties();
  }, []);

  return (
    <>
      <Box bgColor={"pink"}>
        <h1>Dashboard</h1>
        <CreateModal onClose={onClose} isOpen={isOpen} onOpen={onOpen} />

        <Box>{JSON.stringify(parties)}</Box>
      </Box>
    </>
  );
};

export default Dashboard;
