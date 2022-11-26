import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const MAIN_COLOR: string = '#284F58';
const SEC_COLOR: string = '#EE523C';
const BACKGROUND_COLOR: string = '#F8FBFF';
const WHITE = '#fff';
const BACKGROUND_LIGHT_COLOR = '#CCD5D7';
const ITEM_WIDTH = width * 0.75;
const ITEM_HEIGHT = height * 0.75;
const SPACING = 10;

const generalStyles = StyleSheet.create({
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultBackground: {
    backgroundColor: 'white',
  },
});

export {
  generalStyles,
  width,
  height,
  MAIN_COLOR,
  SEC_COLOR,
  BACKGROUND_COLOR,
  WHITE,
  BACKGROUND_LIGHT_COLOR,
  ITEM_WIDTH, 
  ITEM_HEIGHT, 
  SPACING
};
