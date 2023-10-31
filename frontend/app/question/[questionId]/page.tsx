'use client'
import { QuestionData, getQuestion } from '@/QuestionsData'
import React, { useEffect, useState } from 'react'

type Props = {
	params: {
		questionId: string
	}
}

const SingleQuestionPage = ({ params: { questionId } }: Props) => {
	const [question, setQuestion] = useState<QuestionData | null>(null)

	useEffect(() => {
		const doGetQuestion = async (questionId: number) => {
			const foundQuestion = await getQuestion(questionId)
			setQuestion(foundQuestion)
		}

		if (questionId) {
			doGetQuestion(parseInt(questionId))
		}
	}, [questionId])

	return (
		<div>
			<p>{questionId}</p>
		</div>
	)
}

export default SingleQuestionPage
