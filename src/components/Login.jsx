import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/username.slice';
import PokedexLogo from '../assets/images/PokedexLogo.png';
import PokeballButton from '../assets/images/PokeballButton.png';
import './Login.css';

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    dispatch(getUsername(inputValue));
    navigate('/pokedex');
  };

  return (
    <section className='login'>
      <img className='login__img' src={PokedexLogo} alt='Pokédex' />
      <div>
        <h2 className='login__h2'>Hi Trainer</h2>
        <p className='login__p'>To start, tell me your name</p>
      </div>
      <form onSubmit={submit}>
        <input
          className='login__input'
          type='text'
          placeholder='Your name...'
          // required
          autoFocus
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className='login__button'>Start</button>
      </form>
      <img
        className='PokeballButton'
        src={PokeballButton}
        alt='Pokeball Button'
      />
      <div className='red'></div>
      <div className='black'></div>
    </section>
  );
};

export default Login;
