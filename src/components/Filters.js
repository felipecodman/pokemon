import React from "react";

const Filters = (props) => {
	const {
		setFilterType,
		setFilterRegion,
		setFilterSorting,
		setIsShiny,
		regions,
		types
	} = props;

	const setType = (e) => {
		setFilterType(e);
	};

	const setRegion = (e) => {
		setFilterRegion(e);
	};

	const setSorting = (e) => {
		setFilterSorting(e);
	};

	return (
		<div className="filter-container">
			<div className="type-filter-container">
				<p>Filter by Type</p>
				<select
					className="selectType-box"
					aria-label="Filter Pokemon By Type"
					name="type-list"
					onChange={setType}
				>
					{types.map((type, idx) => {
						return <option value={idx}>{type.name}</option>;
					})}
				</select>
			</div>
			<div className="region-filter-container">
				<p>Filter by Region</p>
				<select
					className="selectRegion-box"
					aria-label="Filter Pokemon By Region"
					name="region-list"
					onChange={setRegion}
				>
					{regions.map((region, idx) => {
						return <option value={idx}>{region.name}</option>;
					})}
				</select>
			</div>
			<div className="sorting-filter-container">
				<p>Sort by</p>
				<select
					className="selectSorting-box"
					aria-label="Sort Pokemon By"
					name="sort-list"
					onChange={setSorting}
				>
					<option value="id">ID</option>
					<option value="name">Name</option>
				</select>
			</div>
			<div className="sorting-filter-container">
				<p>Shiny</p>
				<select
					className="selectShiny-box"
					aria-label="Shiny Selection"
					name="shiny-selection"
					onChange={(e) => setIsShiny(e.target.value)}
				>
					<option value="no">No</option>
					<option value="yes">Yes</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;