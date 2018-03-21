// libraries
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* Components ==================================================================== */
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

/*
const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>    
  );
};
*/

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  }
});

/* Export ==================================================================== */
export { Home };
