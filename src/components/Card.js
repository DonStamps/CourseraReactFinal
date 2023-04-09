import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // You can also use the CSS-in-JS library styled-components if you wish to.

  return (
    <VStack
      spacing={4}
      p={4}
      textColor="black"
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="md" fontWeight="700">
          {title}
        </Heading>
        <Text fontWeight="400" color="blue.600">
          {description}
        </Text>
      </VStack>
      <HStack alignItems="left">
        <Text fontWeight="400">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
