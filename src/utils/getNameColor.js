const getNameColor = type => {
  switch (type) {
    case 'poison':
      return '#5b3184';
    case 'grass':
      return '#416460';
    case 'fire':
      return '#e75c35';
    case 'fighting':
      return '#96402a';
    case 'flying':
      return '#8a6ee0';
    case 'fairy':
      return '#971b45';
    case 'normal':
      return '#735259';
    case 'ground':
      return '#654008';
    case 'rock':
      return '#7e7e7e';
    case 'bug':
      return '#4ab648';
    case 'ghost':
      return '#323569';
    case 'steel':
      return '#5e736c';
    case 'electric':
      return '#ffa629';
    case 'psychic':
      return '#e52d2d';
    case 'ice':
      return '#6fbedf';
    case 'dragon':
      return '#478a93';
    case 'dark':
      return '#030706';
    case 'water':
      return '#1479fb';
    default:
      return '#1f1c2c';
  }
};

export default getNameColor;
