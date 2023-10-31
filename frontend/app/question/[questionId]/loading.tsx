import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const LoadingQuestion = (props: Props) => {
	return (
		<Skeleton className='p-5 flex flex-col items-center'>
			LoadingQuestion
		</Skeleton>
	)
}

export default LoadingQuestion
