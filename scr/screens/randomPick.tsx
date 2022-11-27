import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';

import {FilmInfoSection} from 'components';
import {BACKGROUND_COLOR, generalStyles} from 'styles';

import {FilmNameAndButtons} from 'components';
import {screenProps} from 'types';
import {
  FILM_DETAILS,
  PICK_SUPER_HERO,
  TOTALLY_RANDOM,
} from '../utils/screensName';
import {SEC_COLOR} from 'styles';
import {fetchFilms, HerosData, pickRandom} from 'utils';
import {useDispatch, useSelector} from 'react-redux';
import {addNewFilm, selectedFilm} from '../redux toolkit/slices/filmSlice';
import {fetchFilmsData} from '../utils/functions';

const data = {
  Title: 'Guardians of the Galaxy Vol. 2',
  Year: '2017',
  Rated: 'PG-13',
  Released: '05 May 2017',
  Runtime: '136 min',
  Genre: 'Action, Adventure, Comedy',
  Director: 'James Gunn',
  Writer: 'James Gunn, Dan Abnett, Andy Lanning',
  Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista',
  Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  Language: 'English',
  Country: 'United States',
  Awards: 'Nominated for 1 Oscar. 15 wins & 59 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '7.6/10',
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '85%',
    },
    {
      Source: 'Metacritic',
      Value: '67/100',
    },
  ],
  Metascore: '67',
  imdbRating: '7.6',
  imdbVotes: '677,802',
  imdbID: 'tt3896198',
  Type: 'movie',
  DVD: '22 Aug 2017',
  BoxOffice: '$389,813,101',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

export default function RandomPickScreen({navigation, route}: screenProps) {
  // console.log("Props: ", {navigation, route})

  const [loading, setLoading] = useState(true);
  const [filmData, setFilmData] = useState({})

  const dispatch = useDispatch();

  const {pickedSuperHeroName, allfilms} = useSelector(state => state);

  useEffect(() => {
    Orientation.lockToPortrait();
    let heroName = '';

    if (pickedSuperHeroName.length == 0) {
      let heroIndex = pickRandom(HerosData.length -1);
      heroName = HerosData[heroIndex].name;
    } else  heroName = pickedSuperHeroName;

    _getFilms(heroName);
  }, []);

  const _getFilms = async (heroName: string) => {
    let result = [],
      randomFilmIndex = 1,
      selected= {};
    fetchFilms(heroName)
      .then(async res => {
        dispatch(addNewFilm(res.Search));
        randomFilmIndex = pickRandom(res.Search.length -1);
        console.log(randomFilmIndex)
        selected = await fetchFilmsData(res.Search[randomFilmIndex].imdbID);
        dispatch(selectedFilm(selected));

        setFilmData(selected)
      })
      .catch(error => console.log('error', error))
      .finally(() => {
        setLoading(false);
      });
  };

  const _onChangeFilm =async () => { 
    let randomFilmIndex = pickRandom(allfilms.length -1);
    console.log(allfilms.length -1, randomFilmIndex)
    let selected = await fetchFilmsData(allfilms[randomFilmIndex].imdbID);
    setFilmData(selected)
    console.log(selected)
    dispatch(selectedFilm(selected));
  }

  const {Title, Year, Genre, Actors, Awards, BoxOffice} = filmData;

  const _navigateToDetailsScreen = () => navigation.navigate(FILM_DETAILS);

  return (
    <View
      style={{
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        ...generalStyles.centerAlign,
      }}>
      {loading ? (
        <ActivityIndicator size={'large'} color={SEC_COLOR} />
      ) : (
        <>
          <FilmNameAndButtons
            title={Title}
            duration={7500}
            onViewPress={_navigateToDetailsScreen}
            onChangeFilm={_onChangeFilm}
          />
          <FilmInfoSection type={'Actors'} value={Actors} duration={4000} />
          <FilmInfoSection type={'Year'} value={Year} duration={3000} />
          <FilmInfoSection
            type={'BoxOffice'}
            value={BoxOffice}
            duration={2000}
          />
          <FilmInfoSection type={'Awards'} value={Awards} duration={1000} />
        </>
      )}
    </View>
  );
}
