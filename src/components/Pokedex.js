import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { Loading } from "./Loading";

const Pokedex = (props) => {
	const {
		pokemon,
		currentPage,
		setCurrentPage,
		totalPages,
		loading,
		setShowModal,
		onClickPokemonCard,
		isShiny
	} = props;

  const nextPage = () => {
		if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
	};
	const previousPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

  return (
		<div>
			<div className="header">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onLeftClick={previousPage}
					onRightClick={nextPage}
				/>
			</div>
			{loading ? (
				<Loading />
			) : (
				<div className="pokedex-grid">
					{pokemon.map((pokemon, index) => {
						return (
							<Pokemon
								pokemon={pokemon}
								key={pokemon.name}
								setShowModal={setShowModal}
								onClickPokemonCard={onClickPokemonCard}
								isShiny={isShiny}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Pokedex;