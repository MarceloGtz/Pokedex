import React from 'react';
import PokedexLogo from '../assets/images/PokedexLogo.png';
import PokeballButton from '../assets/images/PokeballButton.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header__ctn'>
      <div className='header__black'></div>
      <div className='header__red'></div>
      <img className='header__PokedexLogo' src={PokedexLogo} alt='Pokedex' />
      <img
        className='header__PokeballButton'
        src={PokeballButton}
        alt='Pokeball'
      />
    </div>
  );
};

export default Header;
