import React, { useState } from 'react'
import {Container} from "@chakra-ui/react"
import Header from './components/Header'
import Body from './components/body'
import {motion} from 'framer-motion'
import Projects from './components/projects'
import Skills from './components/skills'
import Faq from './components/Faq'

function App() {
  return (
    

    <motion.div initial={{opacity : 0}} animate={{opacity:1}} transition={{duration : 2}}>
    <Header/>
    <Body/>
    <Projects/>
    <Skills/>
    <Faq/>
    </motion.div>

  )
}

export default App
