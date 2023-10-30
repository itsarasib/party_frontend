import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useRef } from "react";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  //const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <>
      <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        color={"green"}
      >
        let's create party!!!
      </Box>

      <Button onClick={onOpen}>create party</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Party</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text fontWeight={500}>Title</Text>
              <Input
                placeholder="title"
                width={"400px"}
                bg={"white"}
                // onKeyDown={handleKeyDown}
                // onChange={emailHandler}
              />
            </Box>
            <Box>
              <Text fontWeight={500}>Location</Text>
              <Input
                placeholder="location"
                width={"400px"}
                bg={"white"}
                // onKeyDown={handleKeyDown}
                // onChange={emailHandler}
              />
            </Box>
            <Box>
              <Text fontWeight={500}>Tag</Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Text fontWeight={500}>Max people</Text>
              <NumberInput defaultValue={0} min={0} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            {/* //continue here
            <Box>
              <DatePicker
                label="Controlled picker"
                value={calendarValue}
                onChange={(newValue) => setCalendarValue(newValue)}
              />
            </Box> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
