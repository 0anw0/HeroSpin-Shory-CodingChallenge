import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {generalStyles} from 'styles';

type HeaderProps = {
  LeftIcon?: string;
  RightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  title?: string;
};

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
              color={'#3B1CFF'}
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
              color={'#3B1CFF'}
              solid
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
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Cairo-Regular',
  },
  titleContainer: {
    borderWidth: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  center: {width: '77.5%', ...generalStyles.centerAlign},
  right: {width: '10%'},

  iconTouch: {
    flex: 1,
    backgroundColor: '#EAEDFF',
    borderRadius: 10,
  },
});

export default React.memo(Header, (prev, next) =>
  prev != next ? false : true,
);
