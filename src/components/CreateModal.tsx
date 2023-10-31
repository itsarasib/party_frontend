import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const CreateModal: React.FC<Props> = ({ isOpen, onClose, onOpen }) => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("Event");
  const [date, setDate] = useState<string>("");
  const [maximumPeople, setMaximumPeople] = useState<string>("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleMenuItemClick = (value: string) => {
    setSelectedValue(value);
  };

  const handleMaximumPeopleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaximumPeople(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  // const handleSaveClick = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/party", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       body: JSON.stringify({
  //         title,
  //         location,
  //         selectedValue,
  //         maximumPeople,
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   onClose();
  // };

  const handleCreateEvent = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:8080/party",
        {
          title,
          location,
          selectedValue,
          maximumPeople,
          date,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (resp.status === 200) {
        console.log(resp.data);
      } else {
        alert("Something went wrong");
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
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="title"
                value={title}
                onChange={handleTitleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="location"
                value={location}
                onChange={handleLocationChange}
              />
            </FormControl>

            <Box>
              <Text fontWeight={500}>Tag</Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {selectedValue}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleMenuItemClick("Night event")}>
                    Night event
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("Day event")}>
                    Day event
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("Drink!!")}>
                    Drink!!
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box my={"20px"}>
              <Text fontWeight={500}>Date</Text>
              <Input type="date" value={date} onChange={handleDateChange} />
            </Box>
            <Box>
              <FormControl mt={4}>
                <FormLabel>Maximum people</FormLabel>
                <Input
                  placeholder="max 20"
                  value={maximumPeople}
                  onChange={handleMaximumPeopleChange}
                />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              // onClick={() => {
              //   const titleValue = title;
              //   const locationValue = location;
              //   const selectedValueValue = selectedValue;
              //   const maximumPeopleValue = maximumPeople;
              //   const dateValue = date;
              //   console.log("Title Value:", titleValue);
              //   console.log("Maximum People Value:", maximumPeopleValue);
              //   console.log("Selected Value Value:", selectedValueValue);
              //   console.log("Location Value:", locationValue);
              //   console.log("Date Value:", dateValue);

              //   onClose();
              // }}
              onClick={handleCreateEvent}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateModal;
