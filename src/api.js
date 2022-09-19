export const searchPokemon = async (pokemon) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {}
};

export const getPokemon = async () => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon?limit=898`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {}
};

export const getPokemonData = async (url) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {}
};

export const getPokemonDetails = async () => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon-species?limit=898`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {}
};

export const searchPokemonByType = async (type, limit, offset) => {
	try {
		let url = `https://pokeapi.co/api/v2/type/${type}`;
		const res = await fetch(url);
		const data = await res.json();
		var out = data.pokemon.slice(offset, offset + limit);
		return { length: data.pokemon.length, data: out };
	} catch (err) {}
};

export const searchPokemonByTypeAndRegion = async () => {
	try {
		let url = "https://pokeapi.co/api/v2/pokemon?limit=898";
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {}
};