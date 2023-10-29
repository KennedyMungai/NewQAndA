import { getUnansweredQuestions } from '@/QuestionsData'
import QuestionList from '@/components/Questions/QuestionList'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className='h-[90vh] w-screen pt-5 px-5 flex flex-col items-center gap-10'>
			<div className='flex flex-col gap-2'>
				<h2>Unanswered Questions</h2>
				<Button>Ask A Question</Button>
			</div>
			<div className=''>
				<QuestionList data={getUnansweredQuestions()} />
			</div>
		</main>
	)
}
