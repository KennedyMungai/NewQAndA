'use client'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import ThemeToggle from './ThemeToggle'
import UserProfile from './UserProfile'

type Props = {}

const Header = (props: Props) => {
	const [signedIn, setSignedIn] = useState(false)

	const { setTheme } = useTheme()

	const authHandler = () => {
		console.log('authHandler')
	}

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
	}

	return (
		<nav className='h-[10vh] w-screen shadow-md flex flex-row justify-between p-5 dark:shadow-zinc-800'>
			<div className='flex items-center'>
				<Link href={'/'}>
					<h1 className='uppercase font-bold text-zinc-700 text-2xl hover:bg-zinc-100 p-2 rounded-sm transition dark:text-zinc-50 dark:hover:bg-zinc-800'>
						Q and A
					</h1>
				</Link>
			</div>
			<div className='flex flex-row items-center gap-2'>
				<Input
					placeholder='Search'
					onChange={handleSearchInputChange}
				/>
				<Button type='submit'>Search</Button>
			</div>
			<div className='flex items-center gap-5'>
				<UserProfile isLoggedIn={signedIn} authHandler={authHandler} />
				<ThemeToggle />
			</div>
		</nav>
	)
}

export default Header
