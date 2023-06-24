import React from 'react'
import {Container,Box,Text,Tab,TabList,TabPanels,TabPanel,Tabs} from "@chakra-ui/react"
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup';
const homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg={"gray.800"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.800" 
      >
        <Text color="teal.400" fontSize='4xl' fontFamily='Work sans' align='center'><b>ChatOasis</b></Text>
      </Box>
      <Box bg="gray.800" w="100%" p={4} borderRadius="lg" borderWidth="1px" borderColor={"gray.800"}>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
};

export default homepage;
