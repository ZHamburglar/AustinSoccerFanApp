import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectCapo } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

const buttonRoutes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

class BottomNavBar extends Component {
  render() {
    const { selectedCapo } = this.props.selectedValues;
    const {
      containerStyle,
      buttonStyle,
      selectedTextStyle
    } = BUTTON_GROUP_STYLES;

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text h3>Capo</Text>
        <Text h1 style={{ marginBottom: 2 }}>{selectedCapo}</Text>
        <ButtonGroup
          onPress={index => this.props.selectCapo(index + 1)}
          selectedIndex={selectedCapo - 1}
          buttons={buttonRoutes}
          constainerStyle={containerStyle}
          buttonStyle={buttonStyle}
          selectedTextStyle={selectedTextStyle}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ selectedValues }) => ({ selectedValues });

export default connect(mapStateToProps, { selectCapo })(BottomNavBar);