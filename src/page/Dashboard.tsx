import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import AddParty from "../components/AddParty";
import PartyCard from "../components/PartyCard";

export interface PartyProps {
  _id: string;
  creater: string;
  title: string;
  location: string;
  tag: string;
  date: string;
  max: string;
  countParti: string[];
}

const Dashboard: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [parties, setParties] = useState<PartyProps[]>([]);

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

  const handleDeleteList = async (id: string) => {
    try {
      const resp = await axios.delete(`http://localhost:8080/party/${id}`);
      if (resp.status === 200) {
        setParties((prev) => {
          return prev.filter((party) => party._id !== id);
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoinParty = async (id: string) => {
    const userAuth = localStorage.getItem("token");
    try {
      const resp = await axios.patch(
        `http://localhost:8080/party/join/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userAuth}`,
          },
        }
      );
      if (resp.status === 200) {
        setParties((prev) => {
          return prev.map((party) => {
            if (party._id === id) {
              return {
                ...party,
                countParti: [...party.countParti, userAuth!],
              };
            } else {
              return party;
            }
          });
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box m={5}>
        <AddParty onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {parties.map((party) => {
          return (
            <GridItem>
              <PartyCard
                _id={party._id}
                creater={party.creater}
                title={party.title}
                location={party.location}
                tag={party.tag}
                date={party.date}
                max={party.max}
                countParti={party.countParti}
                onDelete={handleDeleteList}
                onJoin={handleJoinParty}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default Dashboard;
