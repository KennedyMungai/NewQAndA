'use client'
import React from 'react'

type Props = {}

const QuestionErrorPage = (props: Props) => {
	return (
		<section className='p-5 flex flex-col items-center'>
			<p className='text-red-500 uppercase text-2xl'>
				Something went wrong
			</p>
		</section>
	)
}

export default QuestionErrorPage
