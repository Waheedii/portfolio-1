import {Box,Text,IconButton,useColorMode,Container} from '@chakra-ui/react'
import React from 'react'

import {FaMoon,FaSun}from "react-icons/fa"
export default function Header() {
 const {colorMode,toggleColorMode}= useColorMode()
  return(
    <Container  maxW={["container.xs","container.md","container.lg","container.xl"]}>

    <Box display="flex" justifyContent="space-between">
      <Box>
    <Text fontFamily="cursive" fontSize="2xl">W.A</Text>
      </Box>
      <Box>
      <Text fontSize={['1xl', '2xl', '2xl', '2xl']} as='a' href="/projects" mr="4" >projects</Text>

        <Text   fontSize={['1xl', '2xl', '2xl', '2xl']}  as='a' href="/projects">Blog</Text>
        
      </Box>
      <IconButton icon={colorMode === 'light' ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode}>
    </IconButton>
      
      </Box>
    </Container>
  )
};
