import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {screenProps} from 'types';
import {
  BACKGROUND_COLOR,
  BACKGROUND_LIGHT_COLOR,
  height,
  width,
  SEC_COLOR,
} from 'styles';
import FastImage from 'react-native-fast-image';
import {MAIN_COLOR, generalStyles} from 'styles';
import { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';

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

type FilmSectionType = {
  section: string;
  desc: string;
};

const FilmSection = ({section, desc}: FilmSectionType) => {
  return (
    <View style={[generalStyles.centerAlign, styles.divider]}>
      <View style={styles.subHeader}>
        <Text style={[styles.title, {fontSize: 12}]}>
          {section.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.subTitle}>{desc}</Text>
    </View>
  );
};

export default function FilmDetailsScreen({navigation}: screenProps) {

  useEffect(() => {
    Orientation.lockToPortrait(); 
  }, [])
  
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
      }}>
      <FastImage
        source={{uri: data.Poster}}
        style={{height: height * 0.5, width: width}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.title}>{data.Title}</Text>
      <View style={[styles.divider, {width: '90%'}]}>
        <Text style={styles.subTitle}>{data.Plot}</Text>
      </View>
      <FilmSection section={'AWARDS'} desc={data.Awards} />
      <FilmSection section={'Year'} desc={data.Year} />
      <FilmSection section={'Genre'} desc={data.Genre} />
      <FilmSection section={'imdbRating'} desc={data.imdbRating} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Cairo-Bold',
    color: SEC_COLOR,
    padding: 10,
    fontSize: 20,
  },
  subTitle: {
    fontFamily: 'Cairo-Regular',
    color: MAIN_COLOR,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 20,
  },
  subHeader: {
    paddingHorizontal: 1,
    borderRadius: 5,
    backgroundColor: MAIN_COLOR,
    marginBottom: 5,
  },
  divider: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: SEC_COLOR,
    marginBottom: 5,
  },
});
