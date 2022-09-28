const getCardColor = type => {
  switch (type) {
    case 'poison':
      return '#895ab8';
    case 'grass':
      return '#b6dbb3';
    case 'fire':
      return '#e67728';
    case 'fighting':
      return '#b94b2f';
    case 'flying':
      return '#9f89e4';
    case 'fairy':
      return '#ac385f';
    case 'normal':
      return '#905e68';
    case 'ground':
      return '#7e510d';
    case 'rock':
      return '#999999';
    case 'bug':
      return '#78c56b';
    case 'ghost':
      return '#43479a';
    case 'steel':
      return '#789188';
    case 'electric':
      return '#ffb347';
    case 'psychic':
      return '#e34747';
    case 'ice':
      return '#97d3eb';
    case 'dragon':
      return '#65aab4';
    case 'dark':
      return '#2c2d2d';
    case 'water':
      return '#57a0fd';
    default:
      return '#1f1c2c';
  }
};

export default getCardColor;
