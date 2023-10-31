import React from 'react'

type Props = {}

const NotFoundPage = (props: Props) => {
	return (
		<div className='w-screen h-[90vh] flex flex-col items-center justify-center'>
			<p className='uppercase text-3xl'>Page Not Found</p>
			<p className='text-red-500 underline'>
				Please use the navigation bar for a better experience
			</p>
		</div>
	)
}

export default NotFoundPage
