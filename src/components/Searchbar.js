import React, { useState } from "react";
// import React from "react";
import { searchPokemon } from '../api';
const Searchbar = (props) => {
	const { onSearch } = props;
	const [search, setSearch] = useState("");

	const onChange = (e) => {
		setSearch(e.target.value.toLowerCase());
		if (e.target.value.length === 0) {
			onSearch(null);
		}
	};

	const onClick = async (e) => {
		const data = await searchPokemon(search);
		// setPokemon(data);
		onSearch(search);
	};

	const handleKeypress = (e) => {
		if (e.key === "Enter") {
			onClick();
		}
	};

	return (
		<div className="searchbar-container">
			<div className="searchbar">
				<input
					placeholder="Search pokemon..."
					onChange={onChange}
					onKeyPress={handleKeypress}
				/>
			</div>
			<div className="searchbar-btn">
				<button onClick={onClick}>Search</button>
			</div>
		</div>
	);
};

export default Searchbar;