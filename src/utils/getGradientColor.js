const getGradientColor = type => {
  switch (type) {
    case 'poison':
      return 'linear-gradient(to bottom, #693b97, #b57bef)';
    case 'grass':
      return 'linear-gradient(to bottom, #81c7c5, #cee2a4)';
    case 'fire':
      return 'linear-gradient(to bottom, #e95e3b, #e6981d)';
    case 'fighting':
      return 'linear-gradient(to bottom, #9c412a, #cd5435)';
    case 'flying':
      return 'linear-gradient(to bottom, #9f89e4, #f5f5f5)';
    case 'fairy':
      return 'linear-gradient(to bottom, #a5244f, #c85f82)';
    case 'normal':
      return 'linear-gradient(to bottom, #77535a, #ad6574)';
    case 'ground':
      return 'linear-gradient(to bottom, #71490e, #b57d2b)';
    case 'rock':
      return 'linear-gradient(to bottom, #818183, #b5b5b8)';
    case 'bug':
      return 'linear-gradient(to bottom, #42b83f, #69d167)';
    case 'ghost':
      return 'linear-gradient(to bottom, #363a78, #5d63c0)';
    case 'steel':
      return 'linear-gradient(to bottom, #647972, #919a97)';
    case 'electric':
      return 'linear-gradient(to bottom, #ffb347, #ffcc33)';
    case 'psychic':
      return 'linear-gradient(to bottom, #de3232, #e36363)';
    case 'ice':
      return 'linear-gradient(to bottom, #6bc1e5, #96dcfa)';
    case 'dragon':
      return 'linear-gradient(to bottom, #4c929c, #81b2b9)';
    case 'dark':
      return 'linear-gradient(to bottom, #050908, #353938)';
    case 'water':
      return 'linear-gradient(to bottom, #1359b3, #3188f8)';
    default:
      return 'linear-gradient(to bottom, #1f1c2c, #928dab)';
  }
};

export default getGradientColor;
