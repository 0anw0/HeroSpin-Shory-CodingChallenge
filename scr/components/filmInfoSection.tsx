import {View, Text} from 'react-native';
import React from 'react';
import {generalStyles, MAIN_COLOR, WHITE, width} from 'styles';
import {getFontSize} from 'utils';
import { FilmInfoSectionType } from 'types';
import Animated, { SlideInUp, Easing, withTiming, withDelay} from 'react-native-reanimated';


const FilmInfoSection = ({type, value, duration}:FilmInfoSectionType) => {
  let fontSize: number = getFontSize(value);


  return (
    <Animated.View entering={SlideInUp.duration(duration).easing(Easing.ease)} style={{height: '15%', width: '80%', ...generalStyles.centerAlign}}>
      <View
        style={{height: '50%', width: '100%', ...generalStyles.centerAlign}}>
        <Text
          style={{fontFamily: 'Cairo-Bold', fontSize: 20, color: MAIN_COLOR}}>
          {type}
        </Text>
      </View>
      <View
        style={{
          height: '50%',
          width: '100%',
          borderRadius: 20,
          ...generalStyles.centerAlign,
          backgroundColor: MAIN_COLOR,
        }}>
        <Text
          style={{fontFamily: 'Cairo-Bold', fontSize: fontSize, color: WHITE}}>
          {value}
        </Text>
      </View>
    </Animated.View>
  );
};

export default React.memo(FilmInfoSection, (prevProps, nextProps) =>
  prevProps != nextProps ? false : true,
);
