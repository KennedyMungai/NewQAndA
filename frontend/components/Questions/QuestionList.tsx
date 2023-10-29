import { QuestionData } from '@/QuestionsData'

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
