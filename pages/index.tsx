import { Box, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box as="main" pb={8}>
      <Container maxW="container.md" pt={14}>
        <h1> Welcome to my space </h1>
      </Container>
    </Box>
  )
}

export default Home
