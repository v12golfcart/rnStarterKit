// libraries
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

// redux
import * as Actions from '../redux_actions';

/* Components ==================================================================== */
const mapStateToProps = state => {
  return {
    miscUi: state
  };
};

const mapDispatchToProps = {
  testToggleUi: Actions.testToggleUi,
};

/* Components ==================================================================== */
class FirstPage extends Component {  
  render() {
    console.log('first page props', this.props);
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.testToggleUi}
        >
          <Text>Hello World!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  }
});

/* Export ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
