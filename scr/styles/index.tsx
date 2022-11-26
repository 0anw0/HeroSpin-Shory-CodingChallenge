import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const generalStyles = StyleSheet.create({
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultBackground: {
    backgroundColor: 'white',
  },
});

export {generalStyles, width, height};
