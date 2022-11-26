import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { 
  SplashScreen,
  RandomPickScreen,
  FilmDetailsScreen,
  PickSuperHeroScreen,} from 'screens'

const StackNavigator = createStackNavigator();

const AppNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="Splash" component={SplashScreen} />
      <StackNavigator.Screen name="RandomPick" component={RandomPickScreen} />
      <StackNavigator.Screen name="SelectSuperHero" component={PickSuperHeroScreen} />
      <StackNavigator.Screen name="FilmDetails" component={FilmDetailsScreen} />
    </StackNavigator.Navigator>
  );
};

export default AppNavigator;
