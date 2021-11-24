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
  text-indent: 1em;
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
            Dennis is a full-stack developer currently working &nbsp;
            <ExternalLink href="https://www.zillow.com" text={'@ZillowGroup'} />
            . Based out of Silicon Valley, Dennis is surrounded by the brilliant
            minds that powers the world. Outside of work, Dennis enjoys playing
            League of Legends (
            <ExternalLink
              href="https://na.op.gg/summoner/userName=cryoutloud"
              text={'@CryOutLoud'}
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
          <Box display="flex">
            <Text fontWeight={'bold'}>2017</Text>
            <Paragraph>
              Graduated from Purdue University and started &nbsp;
              <ExternalLink
                href="https://www.grabqpons.com"
                text={'@Grabqpons'}
              />
            </Paragraph>
          </Box>
          <Box display="flex">
            <Text fontWeight={'bold'}>2018</Text>
            <Paragraph>
              Moved to California and started at &nbsp;
              <ExternalLink
                href="https://www.crunchbase.com/organization/keyo-ai"
                text={'@KeyoAI'}
              />
            </Paragraph>
          </Box>

          <Box display="flex">
            <Text fontWeight={'bold'}>2020 to Present</Text>
            <Paragraph>
              Started at Zillow when Keyo AI got acquired by Zillow Group
            </Paragraph>
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
