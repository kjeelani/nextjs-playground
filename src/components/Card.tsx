import React from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';

const Card = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Heading as="h3" size="lg" mb="2">
        Card Title
      </Heading>
      <Image src="https://via.placeholder.com/150" alt="Placeholder image" />
      <Text mt="2">
        This is some paragraph text that goes inside the card. Replace this with your actual content.
      </Text>
    </Box>
  );
};

export default Card;