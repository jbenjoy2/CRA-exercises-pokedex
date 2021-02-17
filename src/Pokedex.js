import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ cards }) => {
	return (
		<div className="Pokedex">
			<style>@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');</style>;
			<h1 className="Pokedex-header">POKÉDEX</h1>
			<div className="Pokedex-cards">
				{cards.map((c) => (
					<Pokecard key={c.id} id={c.id} name={c.name} type={c.type} exp={c.exp} />
				))}
			</div>
		</div>
	);
};

Pokedex.defaultProps = {
	cards : [
		{ id: 4, name: 'Charmander', type: 'fire', exp: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', exp: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', exp: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', exp: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', exp: 65 }
	]
};

export default Pokedex;
