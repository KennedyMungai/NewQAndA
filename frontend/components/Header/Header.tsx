'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type Props = {}

const Header = (props: Props) => {
	return (
		<nav className='h-[10vh] w-screen shadow-md flex flex-row justify-between p-5'>
			<div className='flex items-center'>
				<Link href={'/'}>
					<h1 className='uppercase font-bold text-zinc-700 text-2xl hover:bg-zinc-100 p-2 rounded-sm transition'>
						Q and A
					</h1>
				</Link>
			</div>
			<div className='flex flex-row items-center gap-2'>
				<Input placeholder='Search' />
				<Button type='submit'>Search</Button>
			</div>
			<div className='flex items-center'>
				<Avatar>
					<AvatarImage src={''} alt='Profile Image' />
					<AvatarFallback>PI</AvatarFallback>
				</Avatar>
			</div>
		</nav>
	)
}

export default Header
