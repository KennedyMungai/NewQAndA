import { AnswerData } from '@/QuestionsData'
import React from 'react'
import Answer from './Answer'

type Props = {
	data: AnswerData[]
}

const AnswerList = ({ data }: Props) => {
	return (
		<ul className='list-none mt-10'>
			{data.map((answer) => {
				return (
					<li key={answer.answerId}>
						<Answer data={answer} />
					</li>
				)
			})}
		</ul>
	)
}

export default AnswerList
