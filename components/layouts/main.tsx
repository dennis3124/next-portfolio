import { Box, Container } from '@chakra-ui/react'
import Navbar from 'components/Navbar'
import Font from 'lib/font'
import Head from 'next/head'

interface LayoutProps {
  router: any
  children: React.ReactNode
}
const Layout = ({ children, router }: LayoutProps) => {
	return (
		<Container>
			<Head>
				<title>Dennis Chia</title>
				<meta name="description" content="NextJS Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Font />

			<Navbar path={router.asPath} />
			<Box pt={14}>{children}</Box>
		</Container>
	)
}

export default Layout
