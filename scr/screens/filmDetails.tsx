import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {screenProps} from 'types';
import {
  BACKGROUND_COLOR,
  height,
  width,
  SEC_COLOR,
} from 'styles';
import FastImage from 'react-native-fast-image';
import {MAIN_COLOR, generalStyles} from 'styles';
import {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import {useSelector} from 'react-redux';

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

export default function FilmDetailsScreen() {

  const {selected} = useSelector(state => state);
  
  console.log("object :", selected)
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
      }}>
      <FastImage
        source={{uri: selected.Poster}}
        style={{height: height * 0.5, width: width}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.title}>{selected.Title}</Text>
      <View style={[styles.divider, {width: '90%'}]}>
        <Text style={styles.subTitle}>{selected.Plot}</Text>
      </View>
      <FilmSection section={'AWARDS'} desc={selected.Awards} />
      <FilmSection section={'Year'} desc={selected.Year} />
      <FilmSection section={'Genre'} desc={selected.Genre} />
      <FilmSection section={'imdbRating'} desc={selected.imdbRating} />
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
