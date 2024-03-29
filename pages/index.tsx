import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
	Box,
	Container,
	Flex,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'
import { ClassNames } from '@emotion/react'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Typewriter from 'typewriter-effect'

const Home: NextPage = () => {
	const [showForward, setShowForward] = React.useState(false)
	const router = useRouter()
	const variants = {
		appear: { opacity: 1 }
	}
	return (
		<Box as="main" height="100vh">
			<Container
				maxW="container.md"
				display="flex"
				flexDirection={'column'}
				justifyContent="center"
				height="100%"
			>
				<ClassNames>
					{({ css }) => (
						<Typewriter
							options={{
								loop: true,
								wrapperClassName: css({ fontSize: 48 }),
								cursorClassName: css({ fontSize: 48 })
							}}
							onInit={typewriter => {
								typewriter
									.typeString('Dennis Chia, software engineer...')
									.start()
									.callFunction(() => {
										setShowForward(true)
									})
									.pauseFor(2500)
							}}
						/>
					)}
				</ClassNames>
				<Flex justify="flex-end" mt={8}>
					<motion.div
						initial={{ opacity: 0 }}
						key={useColorModeValue('light', 'dark')}
						animate={showForward && 'appear'}
						transition={{ duration: 0.2 }}
						variants={variants}
					>
						<IconButton
							aria-label="Toggle Theme Between Light and Dark"
							colorScheme={useColorModeValue(`brand`, 'orange')}
							icon={<ArrowForwardIcon />}
							onClick={() => router.push('/about')}
						/>
					</motion.div>
				</Flex>
			</Container>
		</Box>
	)
}

export default Home
