import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<Header />
			<body className={open_sans.className}>{children}</body>
		</html>
	)
}
