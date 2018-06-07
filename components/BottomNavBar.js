import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import { selectCapo } from '../actions';

import { BUTTON_GROUP_STYLES, STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const buttonRoutes = ['News', 'Calendar', 'Places', 'Groups', 'Settings'];

class BottomNavBar extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

  render() {
    const { selectedCapo } = this.props.selectedValues;
    const { selectedIndex } = this.state;
    const {
      containerStyle,
      buttonStyle,
      selectedTextStyle
    } = BUTTON_GROUP_STYLES;

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h1 style={{ marginBottom: 2 }}>{selectedIndex}</Text>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
          buttons={['News', 'Calendar', 'Places', 'Groups', 'Settings']}
          constainerStyle={containerStyle}
          buttonStyle={buttonStyle}
          selectedTextStyle={selectedTextStyle}
        />
      </View>
    );
  }
}

const styles = {
    imageStyle: {
      marginTop: 20,
      marginLeft: 10,
      width: 40,
      height: 40
    },
    containerStyle: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    dividerStyle: {
      width: SCREEN_WIDTH * 0.9,
      backgroundColor: '#2196F3'
    },
    buttonContainerStyle: {
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10
    }
  };

const mapStateToProps = ({ selectedValues }) => ({ selectedValues });

export default connect(mapStateToProps, { selectCapo })(BottomNavBar);