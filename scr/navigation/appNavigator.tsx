import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { 
  SplashScreen,
  RandomPickScreen,
  FilmDetailsScreen,
  PickSuperHeroScreen
} from 'screens'

import { TOTALLY_RANDOM, PICK_SUPER_HERO, SPLASH_SCREEN, FILM_DETAILS } from 'utils';

const StackNavigator = createStackNavigator();

const AppNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name={SPLASH_SCREEN} component={SplashScreen} />
      <StackNavigator.Screen name={TOTALLY_RANDOM} component={RandomPickScreen} />
      <StackNavigator.Screen name={PICK_SUPER_HERO} component={PickSuperHeroScreen} />
      <StackNavigator.Screen name={FILM_DETAILS} component={FilmDetailsScreen} />
    </StackNavigator.Navigator>
  );
};

export default AppNavigator;
