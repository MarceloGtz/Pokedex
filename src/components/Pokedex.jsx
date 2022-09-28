import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PokemonCard from './PokemonCard';
import './Pokedex.css';

const Pokedex = () => {
  const username = useSelector(state => state.username);
  const navigate = useNavigate();

  const [pokemonList, setPokemonList] = useState([]);
  const [typesList, setTypes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Pokémon List
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
      .then(res => setPokemonList(res.data.results));

    // Pokémon Types
    axios.get('https://pokeapi.co/api/v2/type/').then(res => {
      const typesFiltered = res.data.results.filter(
        type => type.name !== 'unknown' && type.name !== 'shadow'
      );
      setTypes(typesFiltered);
    });
  }, []);

  // Search Submit
  const submit = e => {
    e.preventDefault();
    navigate(`/pokedex/${inputValue}`);
    setInputValue('');
  };

  // Search Type
  const searchTypes = type => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}/`)
      .then(res => setPokemonList(res.data.pokemon));
  };

  // Pagination
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 24;
  const lastPokemon = page * pokemonsPerPage;
  const firstPokemon = lastPokemon - pokemonsPerPage;
  const paginatedPokemon = pokemonList.slice(firstPokemon, lastPokemon);
  const totalPages = Math.ceil(pokemonList.length / pokemonsPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Pokédex Container */}
      <section className='Pokedex-ctn'>
        <h1 className='Pokedex__h1'>
          <span className='Pokedex__span'>Welcome {username}, </span> here you
          can find your favorite pokémon
        </h1>
        {/* Search Pokémon by id / name */}
        <section className='Pokedex__inputs'>
          <form className='Pokedex__form' onSubmit={submit}>
            <input
              className='Pokedex__input'
              type='text'
              placeholder='Search...'
              autoFocus
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button className='Pokedex__button'>Start</button>
          </form>
          {/* Select Pokémon Type */}
          <select
            className='Pokedex__select'
            onChange={e => {
              searchTypes(e.target.value);
              setPage(1);
            }}
          >
            <option className='Pokedex__option-default' value=''>
              Select pokémons by type...
            </option>
            {typesList.map(type => (
              <option
                className='Pokedex__option'
                key={type.name}
                value={type.name}
              >
                {type.name}
              </option>
            ))}
          </select>
        </section>
        <br />
        {/* Pokémon Cards */}
        <section className='Pokedex__cards'>
          {paginatedPokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </section>
        <nav className='Pokedex__pages'>
          {/* Previous Page */}
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            <i className='fa-solid fa-backward'></i>
          </button>
          {/* Pages Numbers */}
          {pagesNumbers.map(number => (
            <button onClick={() => setPage(number)}>{number}</button>
          ))}
          {/* Next Page */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            <i className='fa-solid fa-forward'></i>
          </button>
        </nav>
      </section>
    </div>
  );
};

export default Pokedex;
