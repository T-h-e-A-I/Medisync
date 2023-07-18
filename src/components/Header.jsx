import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex w="100%">
      <Avatar
        size="lg"
        name="Dan Abrahmov"
        src="https://media.licdn.com/dms/image/D5603AQFB9pLX5mytvQ/profile-displayphoto-shrink_400_400/0/1680773468211?e=1695254400&v=beta&t=J785xeWz34sOMGBefXUamaTHaP2AzWS2xrBNG5_-JI0"
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          Awesh Islam
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
