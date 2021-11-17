import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from 'components/Logo'
import ThemeToggle from 'components/ThemeToggle'
import COLORS from 'lib/colors'
import NextLink from 'next/link'

const LinkItem = ({
  href,
  path,
  children,
  _target
}: {
  href: string
  path: string
  children: React.ReactNode
  _target?: string
}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'brand' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path }: { path: any }) => {
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
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Flex flex={1} justify={'right'}>
          <ThemeToggle />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
