'use client'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
	isLoggedIn: boolean
	authHandler: () => void
	openModal: () => void
	closeModal: () => void
}

const UserProfile = ({
	isLoggedIn,
	authHandler,
	openModal,
	closeModal
}: Props) => {
	return (
		<div>
			{isLoggedIn ? (
				<Avatar>
					<AvatarImage src={''} alt='Profile Image' />
					<AvatarFallback>PI</AvatarFallback>
				</Avatar>
			) : (
				<Button onClick={authHandler}>Log In / Sign Up</Button>
			)}
		</div>
	)
}

export default UserProfile
