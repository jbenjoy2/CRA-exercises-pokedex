import React from 'react';
import './Pokecard.css';

const API_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
	const source = API_URL + `${props.id}.png`;
	return (
		<div className="Pokecard">
			<h2 className="Pokecard-name">{props.name}</h2>
			<img className="Pokecard-image" src={source} />
			<div className="Pokecard-type">{props.type}</div>
			<div className="Pokecard-exp">{props.exp}</div>
		</div>
	);
};

export default Pokecard;
