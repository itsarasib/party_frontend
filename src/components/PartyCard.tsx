import {
  Button,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { useDecodeJwt } from "../hooks/useDecodeJwt";
import { ChangeImage } from "./ChangeImage";

interface PartyCardProps {
  _id: string;
  creater: string;
  title: string;
  location: string;
  tag: string;
  date: string;
  max: string;
  countParti: string[];
  onDelete: (_id: string) => void;
  onJoin: (_id: string) => void;
}

const PartyCard: React.FC<PartyCardProps> = ({
  _id,
  creater,
  title,
  location,
  tag,
  date,
  max,
  countParti,
  onDelete,
  onJoin,
}) => {
  const { decoded } = useDecodeJwt();
  const isCurrentUserCreator = decoded?.id === creater;

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card key={_id}>
        <CardHeader pb={"5px"}>
          <ChangeImage tag={tag} />
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody pt={"5px"}>
          <Text>Location: {location}</Text>
          <Text>Tag: {tag}</Text>
          <Text>Date: {date}</Text>
          <Text>
            People: {countParti.length}/{max}
          </Text>
        </CardBody>
        <CardFooter justifyContent={"flex-end"}>
          <Button onClick={() => onJoin(_id)}>Join</Button>
          {isCurrentUserCreator && (
            <Button onClick={() => onDelete(_id)}>Delete</Button>
          )}
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default PartyCard;
