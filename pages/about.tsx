import {
	Box,
	Button,
	Heading,
	Icon,
	Link,
	List,
	ListItem,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import AboutHeader from 'components/AboutHeader'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { IoLogoGithub } from 'react-icons/io5'

const Paragraph = styled(Text)`
  text-align: justify;
`

const Section = ({
	children,
	delay = 0
}: {
  children: React.ReactNode
  delay?: number
}) => {
	return (
		<motion.div
			transition={{ delay, duration: 0.2 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{children}
		</motion.div>
	)
}

const ExternalLink = ({
	noColor,
	href,
	text
}: {
  noColor?: boolean
  href: string
  text: string
}) => {
	const activeColor = useColorModeValue('#0645AD', 'orange')

	return (
		<Link href={href} isExternal color={noColor ? undefined : activeColor}>
			{text}
		</Link>
	)
}

const About: NextPage = () => {
	return (
		<Box pt={8}>
			<AboutHeader />
			<Section>
				<Box pt={8}>
					<Heading size="lg" as="h3" mb={4}>
            Work
					</Heading>
					<Paragraph>
            Dennis is a senior software engineer currently working &nbsp;
						<ExternalLink href="https://www.intuitive.com/en-us" text={'@Intuitive'} />
            . Based out of Silicon Valley, Dennis is surrounded by the brilliant
            minds that powers the world. Outside of work, Dennis enjoys playing
            League of Legends (
						<ExternalLink
							href="https://na.op.gg/summoner/userName=cryoutloud"
							text={'@CryOutLoud'}
						/>
            ), working on his project (
						<ExternalLink
							href="https://supr.cloud"
							text={'@Supr'}
						/>
            ) and enjoying a chill weekend with his cats.
					</Paragraph>
				</Box>
			</Section>

			<Section delay={0.5}>
				<Box pt={8}>
					<Heading size="lg" as="h3" mb={4}>
            Bio
					</Heading>
					<Box>
						<Text fontWeight={'bold'}>2017</Text>
						<Paragraph>
              Graduated from Purdue University and started working for&nbsp;
							<ExternalLink
								href="https://www.grabqpons.com"
								text={'@Grabqpons'}
							/>
						</Paragraph>
					</Box>
					<Box>
						<Text fontWeight={'bold'}>2018</Text>
						<Paragraph>
              Moved to California and started working for &nbsp;
							<ExternalLink
								href="https://www.crunchbase.com/organization/keyo-ai"
								text={'@KeyoAI'}
							/>
						</Paragraph>
					</Box>

					<Box>
						<Text marginRight={8} fontWeight={'bold'}>2020</Text>
						<Paragraph>Helped with integration of Keyo&apos;s software into <ExternalLink href="https://www.zillow.com" text={'@ZillowGroup'} /> 
						&nbsp; when Keyo AI got acquired by Zillow Group
						</Paragraph>
					</Box>

					<Box>
						<Text fontWeight={'bold'}>2022 - Present</Text>
						<Paragraph> Helped launched the myIntuitive for web at <ExternalLink href="https://www.intuitive.com/en-us" text={'@Intuitive'} /> </Paragraph>
					</Box>
				</Box>
			</Section>

			<Section delay={1}>
				<Box pt={8}>
					<Heading size="lg" as="h3" mb={4}>
            Socials
					</Heading>
					<List>
						<ListItem>
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoGithub} />}
							>
								<ExternalLink
									noColor
									href="https://www.github.com/dennis3124"
									text={'@dennis3124'}
								/>
							</Button>
						</ListItem>
					</List>
				</Box>
			</Section>
		</Box>
	)
}

export default About
