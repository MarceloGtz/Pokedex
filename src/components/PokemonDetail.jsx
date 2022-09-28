import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './PokemonDetail.css';
import getCardColor from '../utils/getCardColor';
import getNameColor from '../utils/getNameColor';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data));
  }, [id]);

  console.log(pokemon);

  return (
    <div>
      <Header />
      <section className='PokemonDetail'>
        <img
          className='PokemonDetail__img'
          src={pokemon.sprites?.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
        <p
          className='PokemonDetail__id'
          style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
        >
          #{pokemon.id}
        </p>
        <h1
          className='PokemonDetail__name'
          style={{ color: getNameColor(pokemon.types?.[0].type.name) }}
        >
          {pokemon.name}
        </h1>
        <div className='PokemonDetail__info'>
          <p>
            Weight <br /> <b>{pokemon.weight / 10} kg</b>
          </p>
          <p>
            Height <br /> <b>{pokemon.height / 10} m</b>
          </p>
        </div>
        <section className='PokemonDetail__ctn'>
          <div>
            <p className='PokemonDetail__subtitle'>Types</p>
            <div className='PokemonDetail__types' style={{ color: 'white' }}>
              <p
                style={{
                  background: getCardColor(pokemon.types?.[0].type.name),
                }}
              >
                {pokemon.types?.[0].type.name}
              </p>
              {/* AYUDA */}
              {pokemon.types?.[1]?.type.name ? (
                <p
                  style={{
                    background: getCardColor(pokemon.types?.[1]?.type.name),
                  }}
                >
                  {pokemon.types?.[1]?.type.name}
                </p>
              ) : (
                ''
              )}
              {/* AYUDA */}
            </div>
          </div>
          <div>
            <p className='PokemonDetail__subtitle'>Abilities</p>
            <div className='PokemonDetail__abilities'>
              <p className='PokemonDetail__ability'>
                {pokemon.abilities?.[0].ability.name}
              </p>
              <p className='PokemonDetail__ability'>
                {pokemon.abilities?.[1].ability.name
                  ? pokemon.abilities?.[1].ability.name
                  : ''}
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className='PokemonDetail__movements'>
        <br />
        <h2>Movements</h2>
        <div className='PokemonDetail__moves'>
          {pokemon.moves?.map(move => (
            <p className='PokemonDetail__move' key={move.move?.url}>
              {move.move?.name}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PokemonDetail;
