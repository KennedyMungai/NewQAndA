'use client'
import {
	closeModal,
	openModal,
	selectModalState
} from '@/Redux/features/AuthModal/authModal'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import Link from 'next/link'
import { MouseEventHandler, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import ThemeToggle from './ThemeToggle'
import UserProfile from './UserProfile'

type Props = {}

const Header = (props: Props) => {
	const [signedIn, setSignedIn] = useState(false)
	const [searchItem, setSearchItem] = useState('')

	const isModalOpen = useAppSelector(selectModalState)
	const dispatch = useAppDispatch()

	const activateModal = () => {
		dispatch(openModal)
	}

	const deactivateModal = () => {
		dispatch(closeModal)
	}

	const authHandler = () => {
		console.log('authHandler')
	}

	const searchItemHandler = (e: MouseEventHandler<HTMLInputElement>) => {
		setSearchItem(e.name)
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
					value={searchItem}
					onChange={(e) => setSearchItem(e.target.value)}
				/>
				<Button type='submit' onClick={() => setSearchItem('')}>
					<Link href={`/search/${searchItem}`}>Search</Link>
				</Button>
			</div>
			<div className='flex items-center gap-5'>
				<UserProfile
					isLoggedIn={signedIn}
					authHandler={authHandler}
					openModal={activateModal}
					closeModal={deactivateModal}
				/>
				<ThemeToggle />
			</div>
		</nav>
	)
}

export default Header
