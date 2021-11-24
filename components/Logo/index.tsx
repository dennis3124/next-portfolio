import { Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'

const TextLink = styled(Text)`
  cursor: pointer;
`

const Logo = () => {
  return (
    <Box>
      <NextLink href="/">
        <TextLink fontFamily={'Rubik, san-serif'} ml={3}>
          Dennis Chia
        </TextLink>
      </NextLink>
    </Box>
  )
}

export default Logo
