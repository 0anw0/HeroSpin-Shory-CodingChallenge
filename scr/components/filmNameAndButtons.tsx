import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {generalStyles, SEC_COLOR, MAIN_COLOR, WHITE} from 'styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FilmNameComponentType} from 'types';

const FilmNameAndButtons = ({title}: FilmNameComponentType) => {
  return (
    <View style={{height: '30%', width: '100%'}}>
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
      <View
        style={{
          height: '40%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: '70%',
            width: '35%',
            borderRadius: 20,
            backgroundColor: MAIN_COLOR,
            ...generalStyles.centerAlign,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <FontAwesome5 name={`random`} size={24} color={'#fff'} />
          <Text style={{fontFamily: 'Cairo-Bold', color: WHITE, fontSize: 16}}>
            SUFFLE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '70%',
            width: '35%',
            borderRadius: 20,
            backgroundColor: MAIN_COLOR,
            ...generalStyles.centerAlign,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{fontFamily: 'Cairo-Bold', color: WHITE, fontSize: 16}}>
            VIEW
          </Text>
          <FontAwesome5 name={`arrow-right`} size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(FilmNameAndButtons, (prevProps, nextProps) =>
  prevProps !== nextProps ? false : true,
);
