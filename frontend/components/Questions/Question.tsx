import { QuestionData } from '@/QuestionsData'

type Props = { data: QuestionData; showContent?: boolean }

const Question = ({ data, showContent = true }: Props) => {
	return (
		<div className='bg-zinc-200 m-2 p-4 rounded-sm dark:bg-zinc-800'>
			<div className=''>{data.title}</div>
			{showContent && (
				<div className=''>
					{data.content.length > 50
						? `${data.content.substring(0, 50)}...`
						: data.content}
				</div>
			)}
			<div className=''>{`Asked by ${
				data.userName
			} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}</div>
		</div>
	)
}

export default Question
