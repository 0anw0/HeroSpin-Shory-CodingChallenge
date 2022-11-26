import * as React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from '@navigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
