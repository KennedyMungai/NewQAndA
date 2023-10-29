import { QuestionData } from '@/QuestionsData'

type Props = { data: QuestionData }

const Question = ({ data }: Props) => {
	return (
		<div>
			<div className=''>{data.title}</div>
			<div className=''>{`Asked by ${
				data.userName
			} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}</div>
		</div>
	)
}

export default Question
