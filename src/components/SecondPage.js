// libraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* Components ==================================================================== */
const SecondPage = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Again!</Text>
    </View>    
  );
};

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',    
  }
});

/* Export ==================================================================== */
export { SecondPage };
