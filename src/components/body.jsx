import React from 'react';
import {Text,Box,Button} from '@chakra-ui/react'
import { motion } from 'framer-motion';
export default function Body(params) {
  return (
    <div>
      <motion.div  animate={{x: [-50,15,0]}} transition={{duration : 2}}>
    <Text p={['5','6','6','6']}
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize={['2xl','3xl','4xl','5xl']}
  fontWeight="extrabold"
>
  hello!,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i am Abdul Waheed
</Text>
</motion.div>
<motion.div  animate={{y: [50, -15, 0]}} transition={{duration : 2,} }>
<Box w={['1xs','1xl', '2xl','3xl']} h="20" textAlign="center" mx="auto" p='6'>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aspernatur voluptatibus eos ullam, suscipit deleniti accusantium ex fugit assumenda asperiores quo nostrum quisquam voluptates iure? Similique natus ullam maiores animi.<br/>
  </p>
    <Button mt='4' variant='solid' bgColor='cyan.600' px='6' shadow="dark-lg" rounded='2xl'>Lets Talk</Button>
</Box>
</motion.div>
</div>
  )
};
