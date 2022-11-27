import {API_KEY, API_URI} from 'utils';

export const getFontSize = (value: string): number => {
  let fontSize: number = 20;
  if (value.length < 19) fontSize = 20;
  else if (value.length >= 20 && value.length < 29) fontSize = 18;
  else if (value.length >= 30 && value.length < 49) fontSize = 14;
  else if (value.length >= 50 && value.length < 89) fontSize = 12;
  else if (value.length >= 90) fontSize = 10;
  else fontSize = 10;

  return fontSize;
};

const createURI = (heroName: string) =>
  `${API_URI}?s=${heroName}&apikey=${API_KEY}`;

const getFilmDataURI = (imdb: string) =>
  `${API_URI}?i=${imdb}&apikey=${API_KEY}`;

export const fetchFilms = async (heroName: string = '') => {
  if (heroName.length == 0) {
  } // Pick Random Hero
  const uri = createURI(heroName);
  let searchResult = fetch(uri)
    .then(async res => await res.json())
    .catch(error => {
      console.log('Error: ', error);
    });

  return searchResult;
};

export const fetchFilmsData = async (imdb: string = '') => {
  const uri = getFilmDataURI(imdb);
  let searchResult = fetch(uri)
    .then(async res => await res.json())
    .catch(error => {
      console.log('Error: ', error);
    });

  return searchResult;
};


export const pickRandom = (length:number) => Math.floor(Math.random() * length + 1);
