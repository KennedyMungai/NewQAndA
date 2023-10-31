import { QuestionData } from '@/QuestionsData'
import React, { useState } from 'react'

type Props = {
	params: {
		questionId: string
	}
}

const SingleQuestionPage = ({ params: { questionId } }: Props) => {
	const [question, setQuestion] = useState<QuestionData | null>(null)

	return (
		<div>
			<p>{questionId}</p>
		</div>
	)
}

export default SingleQuestionPage
