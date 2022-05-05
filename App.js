/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/screens/HomeStack'



const App: () => Node = () => {


  return (
    <NavigationContainer>
      <HomeStack/>

      
   </NavigationContainer>

  );
};

const styles = StyleSheet.create({
});

export default App;
