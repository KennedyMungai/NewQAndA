import React from 'react'

type Props = {
	params: {
		questionId: string
	}
}

const SingleQuestionPage = ({ params: { questionId } }: Props) => {
	return (
		<div>
			<p>{questionId}</p>
		</div>
	)
}

export default SingleQuestionPage
