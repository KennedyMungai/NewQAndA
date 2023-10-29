import { QuestionData } from '@/QuestionsData'
import React, { ReactNode } from 'react'

type Props = {
	data: QuestionData[]
}

const QuestionList = ({ data }: Props) => {
	return (
		<ul>
			{data.map((question) => (
				<li key={question.questionId}></li>
			))}
		</ul>
	)
}

export default QuestionList
