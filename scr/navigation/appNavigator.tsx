import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';

import {
  SplashScreen,
  RandomPickScreen,
  FilmDetailsScreen,
  PickSuperHeroScreen,
} from 'screens';

import {
  TOTALLY_RANDOM,
  PICK_SUPER_HERO,
  SPLASH_SCREEN,
  FILM_DETAILS,
} from 'utils';
import {Header} from 'components';

const StackNavigator = createStackNavigator();

const ScreenHeader = ({navigation, route}: StackHeaderProps) => {
  const screenTitle: string = route.name || ''

  const _goBack = () => navigation.pop()
  return <Header title={screenTitle} LeftIcon={'arrow-left'} onLeftIconPress={_goBack}/>;
};

const AppNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
      <StackNavigator.Screen
        name={TOTALLY_RANDOM}
        component={RandomPickScreen}
        options={{
          headerShown: true,
          animationEnabled: true,
          header: ScreenHeader,
        }}
      />
      <StackNavigator.Screen
        name={PICK_SUPER_HERO}
        component={PickSuperHeroScreen}
        options={{
          headerShown: true,
          animationEnabled: true,
          header: ScreenHeader,
        }}
      />
      <StackNavigator.Screen
        name={FILM_DETAILS}
        component={FilmDetailsScreen}
        options={{
          headerShown: true,
          animationEnabled: true,
          header: ScreenHeader,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default AppNavigator;
