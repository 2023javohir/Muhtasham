import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex w={'full'} as={'nav'} alignItems={'center'} p={'10px'}>
      <Heading as={'h1'}>
        Dojo Tasks
      </Heading>

      <Spacer />
      <HStack spacing={'20px'}>
        <Box bg={'gray.200'} p={'10px'}>M</Box>
        <Text>Buxgalteriya</Text>
        <Text>Sotuv bo'limi</Text>
        <Text>Ishlab chiqarish bo'limi</Text>
        <Text>Kassa</Text>
        <Button colorScheme='blue'>Button</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar