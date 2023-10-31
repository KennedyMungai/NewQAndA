import React from 'react'

type Props = {
	params: {
		searchTerm: string
	}
}

const SearchedItem = ({ params: { searchTerm } }: Props) => {
	return <div>{searchTerm}</div>
}

export default SearchedItem
