import type { Metadata } from 'next'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
	title: 'My Protfolio',
	description: 'My Personal Portfolio',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
