import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FilmNameComponentType} from 'types';
import {generalStyles, SEC_COLOR, MAIN_COLOR, WHITE} from 'styles';
import Animated, {SlideInUp} from 'react-native-reanimated';

const FilmNameAndButtons = ({title, duration, onChangeFilm, onViewPress}: FilmNameComponentType) => {
  return (
    <Animated.View entering={SlideInUp.duration(duration)} style={{height: '30%', width: '100%'}}>
      <View
        style={{height: '40%', width: '100%', ...generalStyles.centerAlign}}>
        <Text
          style={{fontFamily: 'Cairo-Regular', fontSize: 16, color: SEC_COLOR}}>
          The film:
        </Text>
        <Text
          style={{fontFamily: 'Cairo-Bold', fontSize: 20, color: SEC_COLOR}}>
          {title}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onChangeFilm}>
          <FontAwesome5 name={`random`} size={24} color={'#fff'} />
          <Text style={styles.buttonTitle}>CHANGE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onViewPress}>
          <Text style={styles.buttonTitle}>VIEW</Text>
          <FontAwesome5 name={`arrow-right`} size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default React.memo(FilmNameAndButtons, (prevProps, nextProps) =>
  prevProps !== nextProps ? false : true,
);

const styles = StyleSheet.create({
  buttonContainer: {
    height: '40%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    height: '70%',
    width: '35%',
    borderRadius: 20,
    backgroundColor: MAIN_COLOR,
    ...generalStyles.centerAlign,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonTitle: {fontFamily: 'Cairo-Bold', color: WHITE, fontSize: 16},
});
