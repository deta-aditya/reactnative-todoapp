/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#6A1B9A" barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.appBar}>
          <Text style={styles.appTitle}>TodoApp</Text>
          
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appBar: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#9C27B0',
  },  
  appTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800'
  },
  scrollView: {

  }
});

export default App;
