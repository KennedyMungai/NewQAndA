import { AnswerData } from '@/QuestionsData'
import React from 'react'

type Props = {
	data: AnswerData
}

const Answer = ({ data }: Props) => {
	return (
		<div className=''>
			<div className='text-zinc-600 uppercase font-semibold'>
				{data.content}
			</div>
			<div className='text-zinc-500 text-sm'>{`Answered by ${
				data.userName
			} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}</div>
		</div>
	)
}

export default Answer
