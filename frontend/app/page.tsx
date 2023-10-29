'use client'
import { QuestionData, getUnansweredQuestions } from '@/QuestionsData'
import QuestionList from '@/components/Questions/QuestionList'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'

export default function Home() {
	const [questions, setQuestions] = useState<QuestionData[]>([])
	const [questionsLoading, setQuestionsLoading] = useState(true)

	useEffect(() => {
		const doGetUnansweredQuestions = async () => {
			const unansweredQuestions = await getUnansweredQuestions()

			setQuestions(unansweredQuestions)
			setQuestionsLoading(false)
		}

		doGetUnansweredQuestions()
	}, [])

	const handleAskQuestionClick = () => {
		console.log('Move to the Ask Question page')
	}

	return (
		<main className='h-[90vh] w-screen pt-5 px-5 flex flex-col items-center gap-10'>
			<div className='flex flex-col gap-2'>
				<h2>Unanswered Questions</h2>
				<Button onClick={handleAskQuestionClick}>Ask A Question</Button>
			</div>
			<div className=''>
				{questionsLoading ? (
					<Skeleton className='h-40 w-80' />
				) : (
					<QuestionList data={questions} />
				)}
			</div>
		</main>
	)
}
