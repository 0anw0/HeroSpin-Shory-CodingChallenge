import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

const AppNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="Splash" component={} />
      <StackNavigator.Screen name="RandomPick" component={} />
      <StackNavigator.Screen name="SelectSuperHero" component={} />
      <StackNavigator.Screen name="FilmDetails" component={} />
    </StackNavigator.Navigator>
  );
};

export default AppNavigator;
