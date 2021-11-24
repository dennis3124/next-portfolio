import { Avatar, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const AboutHeader: NextPage = () => {
  return (
    <Box>
      <Box mb={8}>
        <Avatar size={'2xl'} name="Dennis Chia" src={'/images/dennis.jpg'} />
      </Box>
      <Box>
        <Heading size="2xl" as="h1">
          Dennis Chia
        </Heading>
        <p>Fullstack developer / League of Legends geek</p>
      </Box>
    </Box>
  )
}

export default AboutHeader
