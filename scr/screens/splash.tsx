import React, {useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

import {generalStyles} from 'styles';

/**
 *
 * First Screen to be shown to the user
 * @params
 *
 */
export default function SplashScreen() {
  /**
   * Requiring Logo image and memoizing it.
   *
   */
  const logo: any = useMemo(() => require('../assets/logo.png'), []);
  return (
    <View style={[generalStyles.centerAlign, generalStyles.defaultBackground]}>
      <FastImage
        source={logo}
        style={{width: 150, height: 150}}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Text>
        Can't decide what super heros film to watch? Let Hero Spin help you.
      </Text>
      <Button
        title={'React Native Elements'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <Button
        title={'React Native Elements'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
