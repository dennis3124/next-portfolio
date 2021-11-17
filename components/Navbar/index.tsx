import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from 'components/Logo'
import ThemeToggle from 'components/ThemeToggle'
import COLORS from 'lib/colors'
const Navbar = () => {
  return (
    <Box
      left="0"
      w="100%"
      zIndex={1}
      position="fixed"
      as="nav"
      bg={useColorModeValue(COLORS.LINEN, COLORS.RICH_BLACK_FOGRA)}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          direction={{ base: 'column', md: 'row' }}
          spacing={16}
        >
          <Text> Test</Text>
        </Stack>
        <Flex flex={1} justify={'right'}>
          <ThemeToggle />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
