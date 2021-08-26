import React from 'react'
import { Text,Box,SimpleGrid,Skeleton,Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
export default () => {
  return (
    <motion.div>
    <Box mt={['12rem','8rem','7rem','7rem']}>

      <Text fontSize={['2xl','4xl','5xl','5xl']} textAlign='center'>Projects</Text>

    </Box>
    <Container maxW={["container.xs","container.md","container.lg","container.xl"]}>
    <SimpleGrid columns={['1','1','2','2']} spacing={10} justifyItems="center"  mt="3rem"  overflow="hidden" mx="auto" >
    <Box  >
    
      <Skeleton height={["10rem","12rem","15rem","17rem"]} width={["10rem","14rem","15rem","20rem"]} />
      </Box>
    <Box >
      
      <Skeleton  height={["10rem","12rem","15rem","17rem"]} width={["10rem","14rem","15rem","20rem"]}  />
      </Box>
    <Box  >
     
      <Skeleton  height={["10rem","12rem","15rem","17rem"]} width={["10rem","14rem","15rem","20rem"]}  />
      </Box>
    <Box >
     
      <Skeleton height={["10rem","12rem","15rem","17rem"]} width={["10rem","14rem","15rem","20rem"]}  />
      </Box>
    </SimpleGrid>
      </Container>
    </motion.div>
  )
}
