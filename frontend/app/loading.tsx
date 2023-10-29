import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
	return (
		<div className='flex flex-col items-center'>
			<Skeleton className='w-full h-full' />
		</div>
	)
}

export default loading
