import React from 'react';
import { View} from 'react-native';
import Animated, {SlideInDown, SlideInUp} from 'react-native-reanimated';

import {FilmInfoSection} from 'components';
import {
  BACKGROUND_COLOR,
  generalStyles,
} from 'styles';

import {FilmNameAndButtons} from 'components';

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

export default function RandomPickScreen() {
  const {Title, Year, Genre, Actors, Awards, BoxOffice} = data;
  return (
    <View
      style={{
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        ...generalStyles.centerAlign,
      }}>
      <FilmNameAndButtons title={Title} duration={7500}/>
      <FilmInfoSection type={'Actors'} value={Actors} duration={4000} />
      <FilmInfoSection type={'Year'} value={Year}  duration={3000}/>
      <FilmInfoSection type={'BoxOffice'} value={BoxOffice} duration={2000} />
      <FilmInfoSection type={'Awards'} value={Awards} duration={1000}/>
    </View>
  );
}
