import React from 'react'

type Props = {}

const QuestionNotFound = (props: Props) => {
	return (
		<section className='p-5 flex flex-col items-center'>
			<p className='uppercase text-2xl'>The question does not exist</p>
		</section>
	)
}

export default QuestionNotFound
