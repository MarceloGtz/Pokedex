import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';
import getCardColor from '../utils/getCardColor';
import getNameColor from '../utils/getNameColor';
import getGradientColor from '../utils/getGradientColor';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then(res => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <div
      className='PokemonCard-outside'
      style={{ background: getCardColor(pokemon.types?.[0].type.name) }}
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
    >
      <div className='PokemonCard-inside'>
        <div
          className='PokemonCard__img-bg'
          style={{ background: getGradientColor(pokemon.types?.[0].type.name) }}
        >
          <img
            className='PokemonCard__img'
            src={pokemon.sprites?.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>
        <h2
          className='PokemonCard__h2'
          style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
        >
          {pokemon.name}
        </h2>
        <p className='PokemonCard__p'>
          {pokemon.types?.length > 1
            ? pokemon.types?.[0].type.name +
              ' / ' +
              pokemon.types?.[1].type.name
            : pokemon.types?.[0].type.name}
        </p>
        <span className='PokemonCard__span'>Type</span>
        <div className='PokemonCard__divider'></div>
        <div className='PokemonCard__stats-ctn'>
          <div className='PokemonCard__stats-stat'>
            <p className='PokemonCard__stats-name'>HP</p>
            <p
              className='PokemonCard__stats-num'
              style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
            >
              {pokemon.stats?.[0].base_stat}
            </p>
          </div>
          <div className='PokemonCard__stats-stat'>
            <p className='PokemonCard__stats-name'>AT</p>
            <p
              className='PokemonCard__stats-num'
              style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
            >
              {pokemon.stats?.[1].base_stat}
            </p>
          </div>
          <div className='PokemonCard__stats-stat'>
            <p className='PokemonCard__stats-name'>DF</p>
            <p
              className='PokemonCard__stats-num'
              style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
            >
              {pokemon.stats?.[2].base_stat}
            </p>
          </div>
          <div className='PokemonCard__stats-stat'>
            <p className='PokemonCard__stats-name'>SP</p>
            <p
              className='PokemonCard__stats-num'
              style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
            >
              {pokemon.stats?.[5].base_stat}
            </p>
          </div>
          <div className='PokemonCard__stats-stat'>
            <p className='PokemonCard__stats-name'>SP AT</p>
            <p
              className='PokemonCard__stats-num'
              style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
            >
              {pokemon.stats?.[3].base_stat}
            </p>
          </div>
          <div className='PokemonCard__stats-stat'>
            <p className='PokemonCard__stats-name'>SP DF</p>
            <p
              className='PokemonCard__stats-num'
              style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
            >
              {pokemon.stats?.[4].base_stat}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
