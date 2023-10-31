'use client'
import { QuestionData } from '@/QuestionsData'
import React, { useState } from 'react'

type Props = {}

const QuestionPage = (props: Props) => {
	const [question, setQuestion] = useState<QuestionData | null>(null)

	return <div>QuestionPage</div>
}

export default QuestionPage
