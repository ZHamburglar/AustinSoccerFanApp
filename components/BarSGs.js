import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class BarSGs extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>Please work for logos</Text>
      </View>
    );
  }
}

export default BarSGs;