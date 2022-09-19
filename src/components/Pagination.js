import React from "react";
import { LeftArrow, RightArrow } from "./ArrowsPng";

const Pagination = (props) => {
	const { onLeftClick, onRightClick, currentPage, totalPages } = props;

	return (
		<div className="pagination">
			<button className="pagination-btn" onClick={onLeftClick}>
				<div className="icon">
					<LeftArrow />
				</div>
			</button>
			<div className="page-counter">
				{currentPage} of {totalPages}
			</div>
			<button className="pagination-btn" onClick={onRightClick}>
				<div className="icon">
					<RightArrow />
				</div>
			</button>
		</div>
	);
};

export default Pagination;