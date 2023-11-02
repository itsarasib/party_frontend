import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface AddPartyProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface PartyProps {
  title: string;
  location: string;
  tag: string;
  date: string;
  maximumPeople: string;
}

const AddParty: React.FC<AddPartyProps> = ({ isOpen, onClose, onOpen }) => {
  const [party, setParty] = useState<PartyProps>({
    title: "",
    location: "",
    tag: "",
    date: "",
    maximumPeople: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParty((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParty((prev) => {
      return {
        ...prev,
        tag: e.target.value,
      };
    });
  };

  const handleSubmitAddParty = async () => {
    const userAuth = localStorage.getItem("token");

    try {
      const resp = await axios.post("http://localhost:8080/party", party, {
        headers: {
          Authorization: `Bearer ${userAuth}`,
        },
      });
      if (resp.status === 200) {
        console.log(resp.data);
      } else {
        console.log("error");
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Add party</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your party</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl my={4}>
              <FormLabel>Title</FormLabel>
              <Input name="title" placeholder="title" onChange={handleChange} />
            </FormControl>

            <FormControl my={4}>
              <FormLabel>Location</FormLabel>
              <Input
                name="location"
                placeholder="location"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl my={4}>
              <FormLabel>Event Tag</FormLabel>
              <Select placeholder="Select Tag" onChange={handleSelectChange}>
                <option value="Night Party">Night Party</option>
                <option value="Day Party">Day Party</option>
                <option value="Beach Party">Beach Party</option>
              </Select>
            </FormControl>

            <FormControl my={4}>
              <FormLabel>Date</FormLabel>
              <Input name="date" type="date" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Maximum people</FormLabel>
              <Input name="max" placeholder="max 20" onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmitAddParty}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddParty;
