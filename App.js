import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyWebViewComponent from './WebViewComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <MyWebViewComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set your desired background color here
  },
});

export default App;
