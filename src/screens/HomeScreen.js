import React from 'react';
import {View, Text,StyleSheet, Alert, Platform, Button, Pressable, SafeAreaView } from 'react-native';


const HomeScreen = (props) => {

  return (
    <SafeAreaView>
      <Text>Home screen oh yeah</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:  16,

    marginLeft: 28,
    marginTop: 14,
    marginBottom: 14,


  }
});


export default HomeScreen;
