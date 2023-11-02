import { Image } from "@chakra-ui/react";

interface ImageProps {
  tag: string;
}

export const ChangeImage: React.FC<ImageProps> = ({ tag }) => {
  const getImageUrl = () => {
    if (tag === "Night Party") {
      return "https://i.pinimg.com/736x/0c/72/b3/0c72b3829fdca572f014da0f0de22dde.jpg";
    } else if (tag === "Day Party") {
      return "https://nocovernightclubs.com/wp-content/uploads/2018/08/Marquee-Dayclub-Best-Pools-In-Vegas.jpg";
    } else if (tag === "Beach Party") {
      return "https://static.vecteezy.com/system/resources/previews/024/534/745/large_2x/summer-night-beach-party-background-illustration-ai-generative-free-photo.jpg";
    }
  };

  return (
    <Image
      src={getImageUrl()}
      alt={tag}
      borderRadius={7}
      width="320px"
      height="150px"
    />
  );
};
