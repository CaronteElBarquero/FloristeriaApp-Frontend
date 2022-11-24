import React, { useEffect, useState } from "react";
import { IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = ({ onChange }) => {

	const [debouncedValue, setDebouncedValue] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(debouncedValue);
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, [debouncedValue]);

	return (
		<>
			<InputBase
				sx={{ ml: 5, flex: 1, }}
				placeholder="Buscador.."
				inputProps={{ 'aria-label': 'search google maps' }}
				onChange={(e) => setDebouncedValue(e.target.value)}
			/>

			<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</>
	)
}
