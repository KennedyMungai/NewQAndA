import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import ThemeProvider from '@/components/Providers/ThemeProvider'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Q And A',
	description: 'A simple almost retarded bulletin app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={open_sans.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange={false}
				>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
