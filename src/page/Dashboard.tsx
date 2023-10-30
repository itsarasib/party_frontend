import { Box, useDisclosure } from "@chakra-ui/react";
import CreateModal from "../components/createModal";

const Dashboard: React.FC = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bgColor={"pink"}>
        <h1>Dashboard</h1>
        <CreateModal onClose={onClose} isOpen={isOpen} />
      </Box>
    </>
  );
};

export default Dashboard;
