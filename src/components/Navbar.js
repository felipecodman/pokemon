import React from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { Logo } from "./LogoPng";
import heart_full from "../images/heart-full.png";

const { useContext } = React;

const defaultMessage = "¡You don't have any favorite Pokemon yet!";

function capitalizeName(name) {
	return name.toString().replace(/\b(\w)/g, (s) => s.toUpperCase());
}

const Navbar = () => {
	const { favoritePokemon } = useContext(FavoriteContext);

	const tooltiptext =
		favoritePokemon.length === 0
			? defaultMessage
			: capitalizeName(favoritePokemon.join(" "));

	return (
		<nav>
			<div className="left-div" />
			<div className="logo">
				<Logo />
			</div>
			<div className="favorites">
				<p>Favorites</p>
				<div className="heart-tooltip">
					<img
						src={heart_full}
						width={24}
						height={22}
						alt="heart-icon"
						className="favorite-heart-navbar"
					/>
					<span className="tooltip-text">{tooltiptext}</span>
				</div>
				<div className="favorite-number">{favoritePokemon.length}</div>
			</div>
		</nav>
	);
};

export default Navbar;