import React from 'react'
import { Text,Container } from '@chakra-ui/react'
import { Progress,Box } from "@chakra-ui/react"
export default function Skills(params) {
  return (
    <Container  maxW={["container.xs","container.md","container.lg","container.xl"]}>
      <Text fontSize={['2xl','3xl','4xl','5xl']} textAlign="center" mt="3rem">Expertise</Text>
      <Box display = "flex" justifyContent="space-evenly" mt="2rem" gridGap="4" alignItems="baseline" > 
        <Text>CSS/SCSS</Text>
        <Progress value='75'borderRadius="lg" shadow="dark-lg" colorScheme="whatsapp" width={['40','80','lg','lg']} isAnimated="true"/>
        <Text>75</Text>
      </Box>
      <Box display = "flex" justifyContent="space-evenly" mt="2rem" gridGap="4" alignItems="baseline"> 
        <Text>JavaScript</Text>
        <Progress value='80'borderRadius="lg" colorScheme="whatsapp"  width={['40','80','lg','lg']} shadow="dark-lg" isAnimated="true"/>
        <Text>80</Text>
      </Box>
      <Box display = "flex" justifyContent="space-evenly" mt="2rem" gridGap="4" alignItems="baseline"> 
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React</Text>
        <Progress value='85'borderRadius="lg"  width={['40','80','lg','lg']} shadow="dark-lg" isAnimated="true" colorScheme="whatsapp"/>
        <Text>85</Text>
      </Box>
      <Box display = "flex" justifyContent="space-evenly" mt="2rem" gridGap="4" alignItems="baseline"> 
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node</Text>
        <Progress value='90'borderRadius="lg" shadow="dark-lg" colorScheme="whatsapp"  width={['40','80','lg','lg']} isAnimated="true"/>
        <Text>90</Text>
      </Box>
    </Container>
  )
};
