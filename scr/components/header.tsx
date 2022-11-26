import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { generalStyles, SEC_COLOR, MAIN_COLOR, height, WHITE } from 'styles';
import {HeaderProps} from '../types/types';

function Header({
  LeftIcon,
  RightIcon,
  onLeftIconPress,
  onRightIconPress,
  title,
}: HeaderProps) {
  return (
    <View style={HeaderSty.container}>
      <View style={HeaderSty.icon}>
        {LeftIcon && (
          <TouchableOpacity
            style={HeaderSty.iconTouch}
            onPress={onLeftIconPress}>
            <FontAwesome5
              name={`${LeftIcon}`}
              size={24}
              color={WHITE}
              solid
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={HeaderSty.center}>
        <Text style={HeaderSty.headerTitle}>{title}</Text>
      </View>

      <View style={HeaderSty.icon}>
        {RightIcon && (
          <TouchableOpacity
            style={HeaderSty.iconTouch}
            onPress={onRightIconPress}>
            <FontAwesome5
              name={`${RightIcon}`}
              size={24}
              color={'#fff'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const HeaderSty = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: MAIN_COLOR,
    height: height * 0.075,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Cairo-Regular',
    color: SEC_COLOR,
  },
  titleContainer: {
    borderWidth: 1,
  },
  icon: {
    width: 50,
    height: 50,
    ...generalStyles.centerAlign,
  },
  center: {width: '77.5%', ...generalStyles.centerAlign},
  right: {width: '10%'},

  iconTouch: {
    borderRadius: 10,
    ...generalStyles.centerAlign,
  },
});

export default React.memo(Header, (prev, next) =>
  prev != next ? false : true,
);
