import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
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
  const activeColor = useColorModeValue('#0645AD', 'orange')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={active ? activeColor : inactiveColor}
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
          justify="flex-end"
          direction={{ base: 'column', md: 'row' }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          {/* 
            TODO: Reenable when I have actual posts
            <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          */}
        </Stack>
        <Box ml={16}>
          <ThemeToggle />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
