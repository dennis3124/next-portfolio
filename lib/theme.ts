import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const fonts = {
	heading: 'Rubik, sans-serif',
	body: 'Rubik, sans-serif'
}

const colors = {
	brand: {
		500: '#1D263B',
		900: '#07090E'
	}
}

const theme = extendTheme({ config, fonts, colors })

export default theme

