import { QuestionData } from '@/QuestionsData'

type Props = { data: QuestionData }

const Question = ({ data }: Props) => {
	return (
		<div className='bg-zinc-200 m-2 p-4 rounded-sm'>
			<div className=''>{data.title}</div>
			<div className=''>
				{data.content.length > 50
					? `${data.content.substring(0, 50)}...`
					: data.content}
			</div>
			<div className=''>{`Asked by ${
				data.userName
			} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}</div>
		</div>
	)
}

export default Question
