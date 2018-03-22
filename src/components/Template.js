// libraries
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

/* Components ==================================================================== */
class Template extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <Text>Hello World!</Text>
        </TouchableHighlight>
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
export { Template };
