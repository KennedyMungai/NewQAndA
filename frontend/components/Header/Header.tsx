'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from 'next-themes'

type Props = {}

const Header = (props: Props) => {
	const { setTheme } = useTheme()

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
			<div className='flex items-center gap-5'>
				<Avatar>
					<AvatarImage src={''} alt='Profile Image' />
					<AvatarFallback>PI</AvatarFallback>
				</Avatar>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant={'outline'} size={'icon'}>
							<BsSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<BsMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem onClick={() => setTheme('light')}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('dark')}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('system')}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	)
}

export default Header
