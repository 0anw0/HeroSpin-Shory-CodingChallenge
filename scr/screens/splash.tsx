import React, {useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

import {generalStyles} from 'styles';
import {screenProps} from 'scr/types/types';
import {TOTALLY_RANDOM, PICK_SUPER_HERO} from 'utils';

/**
 *
 * First Screen to be shown to the user
 * @params
 *
 */
export default function SplashScreen({navigation}: screenProps) {
  /**
   * Requiring Logo image and memoizing it.
   *
   */
  const logo: any = useMemo(() => require('../../assets/logo.png'), []);

  /**
   * navigating to different screens depending on button pressed!
   *
   * @param {string} screenName: specifies the screen to be navigated to!
   * @return void
   */
  const navigateToScreen = (screenName: string) => {
    switch (screenName) {
      case TOTALLY_RANDOM:
        navigation.navigate(TOTALLY_RANDOM);
        break;
      case PICK_SUPER_HERO:
        navigation.navigate(PICK_SUPER_HERO);
        break;
    }
  };

  const _navigateToTotallyRandomScreen = (): void =>
    navigateToScreen(TOTALLY_RANDOM);

  const _navigateToPickSuperHeroScreen = (): void =>
    navigateToScreen(PICK_SUPER_HERO);

  return (
    <View
      style={[
        {flex: 1},
        generalStyles.centerAlign,
        generalStyles.defaultBackground,
      ]}>
      <View
        style={[
          generalStyles.centerAlign,
          {
            height: '30%',
            width: '100%',
          },
        ]}>
        <FastImage
          source={logo}
          style={{width: 150, height: 150}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View
        style={[
          generalStyles.centerAlign,
          {
            height: '30%',
            width: '80%',
          },
        ]}>
        <Text style={{fontFamily: 'Cairo-Bold', fontSize: 20, textAlign:'center'}}>
          Can't decide what super heros film to watch? Let Hero Spin help you.
        </Text>
      </View>

      <Button
        title={'TOTALLY RANDOM'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={_navigateToTotallyRandomScreen}
      />
      <Button
        title={'PICK SUPER HERO'}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={_navigateToPickSuperHeroScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
