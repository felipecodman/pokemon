import React from "react";
import gengardance from "../images/gengardance.gif";

export const Loading = () => {
	return (
		<div className="loading">
			<span className="loading-text">Loading Pokedex...</span>
			<div>
				<img
					className="loading-img"
					src={gengardance}
					width={250}
					height={250}
					alt="loadingGif"
				/>
			</div>
		</div>
	);
};